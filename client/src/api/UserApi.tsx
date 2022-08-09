const axios = require("axios");

const BASE_URL = "http://localhost:8080/";

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
};

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  mobileNumber: string
) => {
  await axios.post(
    BASE_URL + "users",
    {
      first_name: firstName,
      last_name: lastName,
      email: email,
      mobile_number: mobileNumber,
    },
    {
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
};

export const deleteUser = async (id: string) => {
  await axios.delete(BASE_URL + "users", {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    data: { id: id },
  });
};

export const editUser = async (
  id: string,
  firstName: string,
  lastName: string,
  email: string,
  mobileNumber: string
) => {
  const body = {
    id: id,
    first_name: firstName,
    last_name: lastName,
    email: email,
    mobile_number: mobileNumber,
  };
  await axios.put(BASE_URL + "users", body, {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  });
};
