import React from "react";

import Header from "./components/Header/Header";
import MainFooter from "./components/Footer/MainFooter";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router";
function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductDetails />} />
        </Routes>
      </main>
      <MainFooter />
    </>
  );
}

export default App;
