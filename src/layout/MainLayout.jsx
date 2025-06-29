import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet /> {/* This will render the child route component */}
      <Footer />
    </>
  );
};

export default MainLayout;
