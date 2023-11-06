import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../../features/context/authContext/Index";
import { Spin } from "antd";

const ProtectedRoutes = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="container m-auto h-screen w-screen flex items-center justify-center">

    <Spin />
  </div>;

  if (!user) return <Navigate to="/login"></Navigate>;

  return <>{children}</>;
};
export default ProtectedRoutes;
