import React from "react";
import Container from "../ui/Container";
import { getAllProducts } from "../../../redux/actions/productsAction";
import ProductCard from "../ui/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts.products);

  const fetchAllProducts = async () => {
    if (products.length > 0) return; // ✅ Prevent unnecessary API calls
    try {
      const response = await axios.get(`http://localhost:5000/api/products`);
      dispatch(getAllProducts(response.data));
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, [products]); // ✅ Depend on products
  return (
    <Container>
      <h1>Top Selling Products</h1>
      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductsList;
