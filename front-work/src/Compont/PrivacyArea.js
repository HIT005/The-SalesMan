import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  // if we have user acces then show it interface
  //if we have no user accces so we navigate the user to redirect singup or login page
  const acces = localStorage.getItem("user");

  return acces ? <Outlet /> : <Navigate to="/signup" />;
};

export default PrivateRoute;
