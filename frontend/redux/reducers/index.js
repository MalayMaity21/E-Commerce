import { combineReducers } from "@reduxjs/toolkit";

import {
  cartReducers,
  productReducer,
  SelectedProductsReducers,
} from "./ProductReducers";

const reducers = combineReducers({
  allProducts: productReducer,
  product: SelectedProductsReducers,
  cartDetails: cartReducers,
});

export default reducers;
