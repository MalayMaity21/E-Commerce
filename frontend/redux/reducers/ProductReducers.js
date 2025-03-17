import { ActionTypes } from "../constants/productConstans";

const initialState = {
  products: [],
  selectedProduct: {}, // Store selected product separately
  cart: [],
};

export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ALL_PRODUCTS:
      return { ...state, products: payload };

    case ActionTypes.PRODUCTS_DETAILS:
      return { ...state, products: payload };
    default:
      return state;
  }
};

export const SelectedProductsReducers = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCTS:
      return {};
    default:
      return state;
  }
};
export const cartReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_TO_CART:
      return { ...state, cart: [...state.cart, payload] };
    case ActionTypes.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === payload.id
            ? { ...item, quantity: payload.quantity }
            : item
        ),
      };

    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((items) => items.id !== payload.id),
      };
    case ActionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export const filterProducts = (state = initialState, { types, payload }) => {
  switch (types) {
    case ActionTypes.SET_CATEGORY_FILTER:
      return { ...state, cart: [...state.cart, payload] };

    case ActionTypes.SET_PRICE_FILTER:
      return { ...state, products: payload };
    case ActionTypes.SET_RATING_FILTER:
      return { ...state, products: payload };
    default:
      return state;
  }
};
