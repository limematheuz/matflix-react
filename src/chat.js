// Plan
// Crear un servicio de autenticación en React: Este servicio manejará el registro, login y almacenamiento del token JWT.
// Configurar interceptores de Axios: Para incluir el token en cada solicitud HTTP.
// Crear guards para rutas protegidas: Usar un componente de orden superior (HOC) para proteger las rutas.
// Configurar las rutas en React: Incluir la página de login y las rutas protegidas.
// Crear la página de login: Permitir al usuario iniciar sesión y almacenar el token.
// Configurar roles (opcional): Manejar roles en el frontend si es necesario.
// Implementación

// 1. Crear un servicio de autenticación en React

// authService.js
// import axios from 'axios';

// const API_URL = 'https://localhost:7067/api/Account/';

// const register = (username, email, password) => {
//   return axios.post(API_URL + 'register', {
//     username,
//     email,
//     password,
//   });
// };

// const login = (username, password) => {
//   return axios.post(API_URL + 'login', {
//     username,
//     password,
//   }).then(response => {
//     if (response.data.token) {
//       localStorage.setItem('user', JSON.stringify(response.data));
//     }
//     return response.data;
//   });
// };

// const logout = () => {
//   localStorage.removeItem('user');
// };

// const getCurrentUser = () => {
//   return JSON.parse(localStorage.getItem('user'));
// };

// export default {
//   register,
//   login,
//   logout,
//   getCurrentUser,
// };

// 2.Configurar interceptores de Axios

// axiosConfig.js
// import axios from 'axios';
// import authService from './authService';

// const instance = axios.create({
//   baseURL: 'https://localhost:7067/api',
// });

// instance.interceptors.request.use(
//   (config) => {
//     const user = authService.getCurrentUser();
//     if (user && user.token) {
//       config.headers['Authorization'] = 'Bearer ' + user.token;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

// export default instance;

// 3. Crear guards para rutas protegidas

// PrivateRoute.js
// import React from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import authService from './authService';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={props =>
//       authService.getCurrentUser() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to="/login" />
//       )
//     }
//   />
// );

// export default PrivateRoute;

// 4. Configurar las rutas en React

// Router.jsx
// import React from "react";
// import { Routes, Route } from "react-router-dom";
// import { HomePage } from "./pages/HomePage/HomePage.jsx";
// import { UpcomingDetail } from "./components/Movies/UpcomingMovies/UpcomingDetail/UpcomingDetail.jsx";
// import { PopularDetail } from "./components/Movies/PopularMovies/PopularDetail/PopularDetail.jsx";
// import LoginPage from "./pages/LoginPage/LoginPage.jsx";
// import PrivateRoute from "./PrivateRoute";

// export default function Router() {
//   return (
//     <Routes>
//       <Route path="/login" element={<LoginPage />} />
//       <PrivateRoute path="/" element={<HomePage />} />
//       <PrivateRoute path="/detailed-upcoming/:id" element={<UpcomingDetail />} />
//       <PrivateRoute path="/detailed-popular/:id" element={<PopularDetail />} />
//     </Routes>
//   );
// }

// 5. Crear la página de login

// LoginPage.jsx
// import React, { useState } from 'react';
// import authService from '../../services/authService';

// const LoginPage = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await authService.login(username, password);
//       window.location.href = '/';
//     } catch (error) {
//       setMessage('Login failed. Please check your credentials.');
//     }
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <div>
//           <label>Username</label>
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
//         </div>
//         <div>
//           <label>Password</label>
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         </div>
//         <button type="submit">Login</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default LoginPage;

// 6. Configurar roles (opcional)
// Si necesitas manejar roles en el frontend, puedes extender authService para incluir la lógica de roles y ajustar PrivateRoute para verificar roles específicos.

// 7. Configurar el Token en el Backend
// Asegúrate de que tu backend esté configurado para aceptar y validar el token JWT en las solicitudes.

// Con estos pasos, tendrás una estructura básica para manejar autenticación y autorización en tu aplicación React utilizando tu backend en C# con JWT.

// https://webapp-240820115338.azurewebsites.net/api/Account/register
//https://webapp-240820115338.azurewebsites.net/api/Account/login