import axios from "axios";
import AuthService from "../Services/AuthService";

const Instance = axios.create({
  baseURL: "https://webapp-240820115338.azurewebsites.net/api/Account/",
});

Instance.interceptors.request.use(
  (config) => {
    const user = AuthService.getCurrentUser();
    if (user && user.token) {
      const token = "Bearer " + user.token;
      config.headers.Authorization = token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default Instance;
