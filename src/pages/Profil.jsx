import useFetch from "../API/FetchAPI";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

import Header from "../components/Header";
import VerticalLayout from "../components/VerticalLayout";
import DailyActivity from "../components/DailyActivity";
import Sessions from "../components/Sessions";
import Performances from "../components/Performances";
import Score from "../components/Score";
import Card from "../components/Card";

import "../styles/Profil.css";
import cal from "../assets/cardAssets/calories-icon.svg";
import prot from "../assets/cardAssets/protein-icon.svg";
import glu from "../assets/cardAssets/carbs-icon.svg";
import lip from "../assets/cardAssets/fat-icon.svg";

/** MockProfil function
 *
 * retrieve id from URL
 * retrieve data from FetchAPI
 *
 * @returns the Profil page with all the data needed for the different displays
*/
function Profil() {
  const { id } = useParams();
  console.log(id);
  const transformId = parseInt(id);

  const [dataUser, setUserData] = useState();
  const [dataActivity, setActivityData] = useState();
  const [dataSession, setSessionData] = useState();
  const [dataPerformance, setPerformanceData] = useState();
  const [dataScore, setDataScore] = useState();
  const [dataName, setDataName] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const user = await useFetch.getUserInfo(transformId);
      setUserData(user);

      const name = user.userInfos;
      setDataName(name)

      let score;

      if (user.todayScore === undefined) {
        score = user.score;
        setDataScore(score);
      } else if (user.score === undefined) {
        score = user.todayScore;
        setDataScore(score);
      }

      const activity = await useFetch.getUserActivity(transformId);
      setActivityData(activity);

      const session = await useFetch.getUserSession(transformId);
      setSessionData(session);

      const performance = await useFetch.getUserPerformance(transformId);
      setPerformanceData(performance);
    };
    fetchData().catch(console.error);
  }, []);

  if (
    dataUser === undefined ||
    dataActivity === undefined ||
    dataSession === undefined ||
    dataPerformance === undefined
  ) {
    return (
      <div>
        <Header />
        <VerticalLayout />

        <main className="sportsee-main">
          <h1 className="sportsee-title">Oups !</h1>
          <p className="sportsee-engagement-phrase">
            Il semblerait que ce profil ne soit pas accessible 😣
          </p>
        </main>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <VerticalLayout />

      <main className="sportsee-main">
        <h1 className="sportsee-title">
          Bonjour{" "}
          <span className="sportsee-title-username">{dataName.firstName}</span>
        </h1>
        <p className="sportsee-engagement-phrase">
          Félicitation ! Vous avez explosé vos objectifs hier 👏
        </p>

        <section className="sportsee-stats-container">
          <div className="sportsee-graph-container">
            <DailyActivity activity={dataActivity} />
            <div className="sportsee-stats-trio">
              <Sessions sessions={dataSession} />
              <Performances performances={dataPerformance} />
              <Score score={dataScore} />
            </div>
          </div>
          <article className="sportsee-card-container">
            <Card
              count={dataUser.keyData.calorieCount + "kCal"}
              categorie="Calories"
              icon={cal}
            />
            <Card
              count={dataUser.keyData.proteinCount + "g"}
              categorie="Protéines"
              icon={prot}
            />
            <Card
              count={dataUser.keyData.carbohydrateCount + "g"}
              categorie="Glucides"
              icon={glu}
            />
            <Card
              count={dataUser.keyData.lipidCount + "g"}
              categorie="Lipides"
              icon={lip}
            />
          </article>
        </section>
      </main>
    </div>
  );
}

export default Profil;
