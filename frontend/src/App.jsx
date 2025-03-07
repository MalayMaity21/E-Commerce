import React from "react";

import Header from "./components/Header/Header";
import MainFooter from "./components/Footer/MainFooter";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router";
import Dashboard from "./components/Admin/Dashboard";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
}

export default App;
