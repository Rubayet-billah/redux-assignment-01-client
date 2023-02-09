import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../Shared/Header/Header";

const MainLayout = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
