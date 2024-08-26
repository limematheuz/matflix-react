import React from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../Shared/Services/AuthService";

const PrivateRoute = ({ element: Component, ...rest }) => {
  const user = AuthService.getCurrentUser();
  return user ? <Component {...rest} /> : <Navigate to="/auth" />;
};

export default PrivateRoute;