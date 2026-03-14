import React from "react";
import NavBar from "../common/NavBar";
import { Outlet } from "react-router";


const RegisterLayout = () => {
  return (
    <div className="bg-(--bg-color)">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default RegisterLayout;
