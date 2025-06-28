import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="pt-20 px-4 max-w-7xl mx-auto">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;
