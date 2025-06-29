import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import New from "./pages/New";
import MainLayout from "./layout/MainLayout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/women" element={<Women />}></Route>
            <Route path="/men" element={<Men />}></Route>
            <Route path="/new" element={<New />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <NavBar /> */}
    </>
  );
};

export default App;
