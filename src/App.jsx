import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Women from "./pages/Women";
import Men from "./pages/Men";
import New from "./pages/New";
import MainLayout from "./layout/MainLayout";
import Login from "./components/Login";
import Signup from "./components/Signup";
// import Product from "./pages/Product";

const App = () => {
  const [cartCount, setCartCount] = useState(0);
  const handleAddToCart = () => setCartCount((c) => c + 1);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <MainLayout cartCount={cartCount} onAddToCart={handleAddToCart} />
            }
          >
            {/* main layout mai props beja hai */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/women" element={<Women />}></Route>
            <Route path="/men" element={<Men />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<Signup />}></Route>
            {/* <Route path="/product" element={<Product/>}></Route> */}
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <NavBar /> */}
    </>
  );
};

export default App;
