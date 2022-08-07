const axios = require("axios");

const BASE_URL = "http://localhost:3000/";

export const getAllUsers = async () => {
  try {
    const response = await axios.get(BASE_URL + "users", {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
    console.log(response);
    return response.data;
  } catch (err) {
    console.log(err);
    return [];
  }
}
