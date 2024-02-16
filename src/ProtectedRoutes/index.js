import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { isAuthenticated } from "../helper/Auth.js";

const ProtectedRoute = ({ redirectPath = "/signin", children }) => {
  if (!isAuthenticated()) {
    return <Navigate to={redirectPath} replace />;
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
