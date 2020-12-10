/* eslint-disable no-unused-vars */

const URL = "http://localhost:3000/api";

export const fetchUserStorage = () => {
  try {
    const user = localStorage.getItem("user");
    return user;
  } catch (err) {
    return { err };
  }
};

export const createUser = (data) => {
  return fetch(`${URL}/user/create`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const loginUser = (data) => {
  return fetch(`${URL}/user/login`, {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
