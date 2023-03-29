import { useParams } from "react-router";
import DailyActivity from "../components/DailyActivity";
import Header from "../components/Header";
import Performances from "../components/Performances";
import Score from "../components/Score";
import Sessions from "../components/Sessions";
import VerticalLayout from "../components/VerticalLayout";
import mockData from "../MockAPI";
import Card from "../components/Card";

import "../styles/Profil.css";
import cal from "../assets/cardAssets/calories-icon.svg";
import prot from "../assets/cardAssets/protein-icon.svg";
import glu from "../assets/cardAssets/carbs-icon.svg";
import lip from "../assets/cardAssets/fat-icon.svg";

/** MockProfil function
 *
 * retrieve id from URL
 * retrieve data from MockAPI
 *
 * @returns the ProfilMock page with all the data needed for the different displays
*/

function MockProfil() {
  const { id } = useParams();
  const transformId = parseInt(id);

  const userInfo = mockData.getMockUserInfo(transformId);
  const user = userInfo.userInfos;

  const userKeyData = userInfo.keyData;

  const score = userInfo.todayScore;

  const userActivity = mockData.getMockUserActivity(transformId);

  const userSession = mockData.getMockUserSession(transformId);

  const userPerformance = mockData.getMockUserPerformance(transformId);

  return (
    <div>
      <Header />
      <VerticalLayout />

      <main className="sportsee-main">
        <h1 className="sportsee-title">
          Bonjour {" "}
          <span className="sportsee-title-username">{user.firstName}</span>
        </h1>
        <p className="sportsee-engagement-phrase">Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <section className="sportsee-stats-container">
          <div className="sportsee-graph-container">
            <DailyActivity activity={userActivity} />
            <div className="sportsee-stats-trio">
              <Sessions sessions={userSession} />
              <Performances performances={userPerformance} />
              <Score score={score} />
            </div>
          </div>
          <article className="sportsee-card-container">
            <Card
              count={userKeyData.calorieCount + "kCal"}
              categorie="Calories"
              icon={cal}
            />
            <Card
              count={userKeyData.proteinCount + "g"}
              categorie="Protéines"
              icon={prot}
            />
            <Card
              count={userKeyData.carbohydrateCount + "g"}
              categorie="Glucides"
              icon={glu}
            />
            <Card
              count={userKeyData.lipidCount + "g"}
              categorie="Lipides"
              icon={lip}
            />
          </article>
        </section>
      </main>
    </div>
  );
}

export default MockProfil;
