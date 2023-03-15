// Concerne uniquement les données Mocker
// On fait les states ici

import { useParams } from "react-router";
import DailyActivity from "../components/DailyActivity";
import Header from "../components/Header";
import Performances from "../components/Performances";
import Score from "../components/Score";
import Sessions from "../components/Sessions";
import VerticalLayout from "../components/VerticalLayout";
import mockData from "../MockAPI";
import Card from "../components/Card";

import "../styles/Profil.css"
import cal from "../assets/cardAssets/calories-icon.svg"
import prot from "../assets/cardAssets/protein-icon.svg"
import glu from "../assets/cardAssets/carbs-icon.svg"
import lip from "../assets/cardAssets/fat-icon.svg"

function MockProfil() {
    
    const { id }  = useParams();
    const transformId = parseInt(id);

    // Récupération des données de l'utilisateur 
    
    const userInfo = mockData.getMockUserInfo(transformId);
    const user = userInfo.userInfos;

    // Utilisation des données keyData pour les affichages en carte (droite)
    const userKeyData = userInfo.keyData;
    
    const score = userInfo.todayScore;
   
    //Récupération des données de l'activité de l'utilisateur
    // Utilisation de BarChart pour l'affichage de l'activité quotidienne
    const userActivity = mockData.getMockUserActivity(transformId)
 

    //Récupération des données des sessions de l'utilisateur
    // Utilisation de LineChart pour l'affichage de la durée moyenne des sessions
    const userSession= mockData.getMockUserSession(transformId)
    

    //Récupération des données de performances de l'utilisateur
    // Utilisation de RadarChart pour l'affichage des specs
    const userPerformance= mockData.getMockUserPerformance(transformId)
 
  return (
    <div>
      
      <Header />
      <VerticalLayout />

      <main className="sportsee-main">
        <h1 className="sportsee-title">Bonjour <span className="sportsee-title-username">{user.firstName}</span></h1> 
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>

        <section className="sportsee-stats-container">
          <DailyActivity activity={ userActivity}/>
          <Sessions sessions={userSession}/>
          <Performances performances={userPerformance}/>
          <Score score={score}/>
        </section>
        <article className="sportsee-card-container">
          <Card count={userKeyData.calorieCount + "kCal"} categorie='Calories' icon={cal}/>
          <Card count={userKeyData.proteinCount + "g"} categorie='Proteines' icon={prot}/>
          <Card count={userKeyData.carbohydrateCount + "g"} categorie='Glucides' icon={glu}/>
          <Card count={userKeyData.lipidCount + "g"} categorie='Lipides' icon={lip}/>
        </article>
      </main>

    </div>
  );
}

export default MockProfil;
