import React from "react";
import { footerAPI, toprateslaes } from "./data/data";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "../src/pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Cart />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetail toprateslaes={toprateslaes}  />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>

      <Footer footerAPI={footerAPI} />
    </>
  );
};

export default App;
