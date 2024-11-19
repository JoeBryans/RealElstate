import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const Protected = () => {
  const user = useSelector((state) => state.user.user);

  return <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>;
};

export default Protected;
