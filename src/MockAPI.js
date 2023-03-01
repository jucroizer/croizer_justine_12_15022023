// Faire les fonctions pour récupérer toutes les infos (4)
// import { useParams } from "react-router-dom";
import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "../src/data/data"

class mockData {

    static getMockUserInfo(id){
        
        let userInfoTab = USER_MAIN_DATA;
        
        userInfoTab = userInfoTab.find(user => user.id === id)

        return userInfoTab
    }

    static getMockUserActivity(id){
        let userActivityTab = USER_ACTIVITY;

        userActivityTab = userActivityTab.find(user => user.userId === id)

        return userActivityTab
    }

    static getMockUserSession(id){
        let userSessionTab = USER_AVERAGE_SESSIONS;

        userSessionTab = userSessionTab.find(user => user.userId === id)

        return userSessionTab
    }

    static getMockUserPerformance(id){
        let userPerformanceTab = USER_PERFORMANCE;

        userPerformanceTab = userPerformanceTab.find(user => user.userId === id)

        return userPerformanceTab
    }

    
}

export default mockData