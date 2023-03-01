// Concerne uniquement les données Mocker
// On fait les states ici

import { useParams } from "react-router";
import Header from "../components/Header";
import VerticalLayout from "../components/VerticalLayout";
import mockData from "../MockAPI";

import "../styles/Profil.css"

function MockProfil() {
    
    const { id }  = useParams();
    const transformId = parseInt(id);

    // Récupération des données de l'utilisateur 
    // Utilisation des données keyData pour les affichages en carte (droite)
    const userInfo = mockData.getMockUserInfo(transformId);
    const user = userInfo.userInfos;
    console.log("user", userInfo)
    
    //Récupération des données de l'activité de l'utilisateur
    // Utilisation de ComposedChart ? pour l'affichage de l'activité quotidienne
    const userActivity = mockData.getMockUserActivity(transformId)
    console.log("activity",userActivity)

    //Récupération des données des sessions de l'utilisateur
    // Utilisation de LineChart pour l'affichage de la durée moyenne des sessions
    const userSession= mockData.getMockUserSession(transformId)
    console.log("sessions", userSession)

    //Récupération des données de performances de l'utilisateur
    // Utilisation de RadarChart pour l'affichage des specs
    const userPerformance= mockData.getMockUserPerformance(transformId)
    console.log("performances", userPerformance)

    //Utilisation de PieChart ou RadialBarChart pour le Score avec todayScore dans les userInfo
 
  return (
    <div>
      
      <Header />
      <VerticalLayout />

      <main className="sportsee-main">
        <h1 className="sportsee-title">Bonjour <span className="sportsee-title-username">{user.firstName}</span></h1> 
        <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      </main>

    </div>
  );
}

export default MockProfil;
