import axios from "axios";

const API_URL = "https://webapp-240820115338.azurewebsites.net/api/Account/";

const register = async (username, email, password) => {
  try {
    const response = await axios.post(API_URL + "register", {
      username,
      email,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error.response || error.message);
    throw error;
  }
};

const login = async (username, password) => {
  try {
    const response = await axios.post(API_URL + "login", {
      username,
      password,
    });
    if (response.data.token) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.error("Error during login:", error.response || error.message);
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

export default { register, login, logout, getCurrentUser };