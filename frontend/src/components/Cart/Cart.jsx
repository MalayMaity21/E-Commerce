import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Minus, Plus, Trash } from "lucide-react";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartDetails.cart);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    dispatch(updateCartQuantity(id, quantity));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  let totalAmount = 0;
  let cartItems = 0;
  for (let item of cart) {
    totalAmount += item.price;
    cartItems += item.quantity;
  }
  // console.log("Total:", totalAmount, cartItems);

  console.log(cart);
  return (
    <div className="container mx-auto p-6 flex flex-col lg:flex-row gap-6">
      {/* Left: Cart Items */}
      <div className="w-full lg:w-3/4 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          My Shopping Bag ({cart.length} Items)
        </h2>
        {cart.length === 0 ? (
          <div className="text-center text-gray-600">
            <p>Your cart is empty 😔</p>
            <Link to="/" className="text-indigo-500 font-semibold">
              Continue Shopping
            </Link>
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 border-b py-4"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-gray-500 text-sm">Size: M | Color: Black</p>
                <p className="text-lg font-bold mt-2">₹{item.price}</p>
              </div>
              <div className="flex items-center border px-3 py-1 rounded-md">
                <button
                  className="p-1"
                  onClick={() =>
                    dispatch({ type: "DECREASE_QUANTITY", payload: item.id })
                  }
                >
                  <Minus size={16} />
                </button>
                <span className="px-3">{item.quantity}</span>
                <button
                  className="p-1"
                  onClick={() =>
                    dispatch({ type: "INCREASE_QUANTITY", payload: item.id })
                  }
                >
                  <Plus size={16} />
                </button>
              </div>
              <button
                className="text-red-500 hover:text-red-600"
                onClick={() =>
                  dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
                }
              >
                <Trash size={20} />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Right: Order Summary */}
      <div className="w-full lg:w-1/4 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Order Summary</h2>
        <div className="flex justify-between text-gray-600">
          <p>Subtotal</p>
          <p>₹{totalAmount}</p>
        </div>
        <div className="flex justify-between text-gray-600 my-2">
          <p>Shipping</p>
          <p className="text-green-500">Free</p>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-bold text-lg">
          <p>Total</p>
          <p>₹{totalAmount}</p>
        </div>
        <button className="w-full bg-indigo-500 text-white py-3 rounded-lg mt-4 font-semibold hover:bg-indigo-600">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
