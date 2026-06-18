import axios from "axios";

const api = axios.create({
  baseURL: "http://4.224.186.213/evaluation-service",
});

api.interceptors.request.use(
  (config) => {
    console.log("Request:", config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response.status);
    return response;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default api;