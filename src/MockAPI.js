import {USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE} from "../src/data/data"

class mockData {

    /** getMockUserInfo function
     *
     * retrieve data from a json
     *
     * @param {number} id
     * @returns info about the user like her/his name, age, score, macro count
    */
    static getMockUserInfo(id){
        
        let userInfoTab = USER_MAIN_DATA;
        
        userInfoTab = userInfoTab.find(user => user.id === id)

        return userInfoTab
    }

    /** getMockUserActivity function
     *
     * retrieve data from a json
     *
     * @param {number} id
     * @returns info about the user activity like daily sessions, kilogram and calories burned
    */
    static getMockUserActivity(id){
        let userActivityTab = USER_ACTIVITY;

        userActivityTab = userActivityTab.find(user => user.userId === id)

        return userActivityTab
    }

    /** getMockUserSession function
     *
     * retrieve data from a json
     *
     * @param {number} id
     * @returns info about the user session like session length day by day
    */
    static getMockUserSession(id){
        let userSessionTab = USER_AVERAGE_SESSIONS;

        userSessionTab = userSessionTab.find(user => user.userId === id)

        return userSessionTab
    }

    /** getMockUserPerformance function
     *
     * retrieve data from a json
     *
     * @param {number} id
     * @returns info about the user performances like cardio, energy, endurance, strength, speed and intensity
    */
    static getMockUserPerformance(id){
        let userPerformanceTab = USER_PERFORMANCE;

        userPerformanceTab = userPerformanceTab.find(user => user.userId === id)

        return userPerformanceTab
    }

    
}

export default mockData