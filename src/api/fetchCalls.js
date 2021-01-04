/* eslint-disable no-unused-vars */

const URL = "https://pure-crag-82741.herokuapp.com/api";

export const fetchUserStorage = () => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
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
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
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

export const deleteTask = (data) => {
  fetch(`${URL}/task/${data}/delete`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updateTaskCompletion = (data) => {
  fetch(`${URL}/task/${data._id}/update`, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
};
