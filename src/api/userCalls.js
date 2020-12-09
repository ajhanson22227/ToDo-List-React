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
