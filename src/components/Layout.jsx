import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
