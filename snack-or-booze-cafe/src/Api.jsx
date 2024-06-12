import axios from "axios";

const BASE_API_URL = "http://127.0.0.1:5173/";

/* 
  json-server will give you CRUD endpoints on snacks and drinks.
  Here we've provided you with a single action to get all drinks.

  You'll need to add to this class as you build features for the app.
*/

class SnackOrBoozeApi {

  static async getSnacks() {
    const result = await axios.get(`${BASE_API_URL}/snacks`);
    return result.data;
  }

  static async getDrinks() {
    const res = await axios.get(`${BASE_API_URL}/drinks`);
    return res.data;
  }

}

export default SnackOrBoozeApi;
