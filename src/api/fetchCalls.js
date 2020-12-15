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

export const fetchProjects = (data) => {
  return fetch(`${URL}/projects`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
      "user-token": data.token,
    },
  }).then((response) => response.json());
};

export const fetchProject = (data) => {
  return fetch(`${URL}/projects/${data}/getproject`, {
    method: "get",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const createProject = (data, user) => {
  return fetch(`${URL}/projects/create`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "user-token": user.token,
    },
  }).then((response) => response.json());
};

export const deleteProject = (data) => {
  fetch(`${URL}/projects/${data}/delete`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createTask = (data) => {
  fetch(`${URL}/task/${data.project}/create`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
