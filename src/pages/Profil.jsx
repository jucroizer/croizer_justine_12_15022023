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

function Profil() {
  const { id } = useParams();
  const transformId = parseInt(id);
  console.log(transformId);

  const [dataUser, setUserData] = useState();
  const [dataActivity, setActivityData] = useState();
  const [dataSession, setSessionData] = useState();
  const [dataPerformance, setPerformanceData] = useState();
  const [dataScore, setDataScore] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const user = await useFetch.getUserInfo(transformId);
      setUserData(user);

      let score ;

      if(user.todayScore === undefined){
        score = user.score;
        setDataScore(score)
        console.log(score)
      } else if (user.score === undefined) {
        score = user.todayScore;
        setDataScore(score)
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
    // retourner une div "pas de retour de l'API" pour signifier le fait de pas avoir de données API non démarrée/ inaccessible
    return (
      <div>
        <Header />
        <VerticalLayout />
        <p>Oups</p>
  
        {/* <main className="sportsee-main">
          <h1 className="sportsee-title">
            Bonjour {" "}
            <span className="sportsee-title-username">{dataUser.firstName}</span>
          </h1>
          <p className="sportsee-engagement-phrase">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
  
          <section className="sportsee-stats-container">
            <div className="sportsee-graph-container">
              <DailyActivity activity={dataActivity} />
              <div className="sportsee-stats-trio">
                <Sessions sessions={dataSession} />
                <Performances performances={dataPerformance} />
                <Score score={dataUser.todayScore} />
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
        </main> */}
      </div>
    );
  }
  // Reprendre ce qu'on a fait sur le profilMOck (html etc..)

  return (
    <div>
      <Header />
      <VerticalLayout />

      <main className="sportsee-main">
        <h1 className="sportsee-title">
          Bonjour {" "}
          <span className="sportsee-title-username">{dataUser.firstName}</span>
        </h1>
        <p className="sportsee-engagement-phrase">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

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
