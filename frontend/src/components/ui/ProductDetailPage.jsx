import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  RemoveFromCart,
} from "../../../redux/actions/productsAction";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const ProductDetailPage = ({
  products,
  title,
  imageUrl,
  brand,
  price,
  description,
}) => {
  const dispatch = useDispatch();

  console.log(title);
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <img
            alt="ecommerce"
            className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
            src={imageUrl}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm text-gray-500 tracking-widest">{brand}</h2>
            <h1 className="text-gray-900 text-3xl font-medium mb-1">{title}</h1>
            <p className="leading-relaxed">{description}</p>
            <div className="flex items-center mt-6 pb-5 border-b-2 border-gray-100 mb-5">
              <span className="text-gray-600 mr-3">Color</span>
              <div className="flex space-x-2">
                <button className="w-6 h-6 bg-gray-300 rounded-full"></button>
                <button className="w-6 h-6 bg-gray-700 rounded-full"></button>
                <button className="w-6 h-6 bg-indigo-500 rounded-full"></button>
              </div>
            </div>
            <div className="flex items-center">
              <span className="title-font font-medium text-2xl text-gray-900">
                ${price}
              </span>
              <button
                className="ml-auto flex items-center px-6 py-2 text-white bg-indigo-500 rounded hover:bg-indigo-600"
                onClick={() => dispatch(AddToCart(products))}
              >
                <ShoppingCart className="w-5 h-5 mr-2" /> Add to cart
              </button>
              <button className="ml-4 p-2 bg-gray-200 rounded-full text-gray-500">
                <Heart className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailPage;
