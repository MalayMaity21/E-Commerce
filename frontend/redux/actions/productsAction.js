import { ActionTypes } from "../constants/productConstans";

export const getAllProducts = (products) => {
  return {
    type: ActionTypes.SET_ALL_PRODUCTS,
    payload: products,
  };
};

export const getProductDetails = (products) => {
  return {
    type: ActionTypes.PRODUCTS_DETAILS,
    payload: products,
  };
};

export const selectedProducts = (products) => {
  return {
    type: ActionTypes.SELECTED_PRODUCTS,
    payload: products,
  };
};
export const removeSelectedProducts = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_PRODUCTS,
  };
};

export const AddToCart = (products) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: products,
  };
};

export const RemoveFromCart = (products) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: products,
  };
};

export const UpdateCartQuantity = (products) => {
  return {
    type: ActionTypes.UPDATE_CART_QUANTITY,
    payload: products,
  };
};

export const clearCart = () => {
  return {
    type: ActionTypes.CLEAR_CART,
  };
};
