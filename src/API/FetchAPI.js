class FetchAPI {
  /** getUserInfo function
   *
   * retrieve data from an API
   *
   * @param {number} id
   * @returns info about the user like her/his name, age, score, macro count
   */
  static async getUserInfo(id) {
    let _data = await fetch(`http://localhost:3000/user/${id}`)
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
    return _data.data;
  }

  /** getUserActivity function
   *
   * retrieve data from an API
   *
   * @param {number} id
   * @returns info about the user like her/his name, age, score, macro count
   */
  static async getUserActivity(id) {
    let _data = await fetch(`http://localhost:3000/user/${id}/activity`)
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
    return _data.data;
  }

  /** getUserSession function
   *
   * retrieve data from an API
   *
   * @param {number} id
   * @returns info about the user like her/his name, age, score, macro count
   */
  static async getUserSession(id) {
    let _data = await fetch(`http://localhost:3000/user/${id}/average-sessions`)
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
    return _data.data;
  }  

  /** getUserPerformance function
   *
   * retrieve data from an API
   *
   * @param {number} id
   * @returns info about the user like her/his name, age, score, macro count
   */
  static async getUserPerformance(id) {
    let _data = await fetch(`http://localhost:3000/user/${id}/performance`)
      .then((response) => response.json())
      .catch((error) => console.log(error.message));
    return _data.data;
  }
}

export default FetchAPI;
