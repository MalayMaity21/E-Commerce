import React from "react";
// import Recommendation from "../../components/ui/Recommendation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeSelectedProducts,
  selectedProducts,
} from "../../../redux/actions/productsAction";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetailPage from "../ui/ProductDetailPage";
const ProductDetails = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product);
  const { productId } = useParams();

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/products/${productId}`
      );
      dispatch(selectedProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchProductDetails();
    dispatch(removeSelectedProducts());
  }, [productId]);
  console.log(products);
  return (
    <>
      <ProductDetailPage
        products={products}
        title={products.title}
        imageUrl={products.imageUrl}
        brand={products.brand}
        price={products.price}
        description={products.description}
      />
    </>
  );
};

export default ProductDetails;
