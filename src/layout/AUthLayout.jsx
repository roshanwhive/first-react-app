import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AUthLayout = () => {
  return (
    <div>
      <Navbar />

      <Outlet />
    </div>
  );
};

export default AUthLayout;
