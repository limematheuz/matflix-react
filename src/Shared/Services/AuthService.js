import axios from "axios";

const API_URL = "https://webapp-240820115338.azurewebsites.net/api/Account/";

const register = (username, email, password) => {
  return axios.post(API_URL + "register", {
    username,
    email,
    password,
  });
};

const login = async (username, password) => {
  const response = await axios
        .post(API_URL + "login", {
            username,
            password,
        });
    if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default { register, login, logout, getCurrentUser };
