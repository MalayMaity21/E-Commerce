import React from "react";

import Header from "./components/Header/Header";
import MainFooter from "./components/Footer/MainFooter";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import { Routes, Route } from "react-router";
import Dashboard from "./components/Admin/Dashboard";
import ProductsList from "./components/Products/ProductsList";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsList />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
}

export default App;
