
import React from "react";
import Navbar from "./Navbar";
import SocialSidebar from "./SocialSidebar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
