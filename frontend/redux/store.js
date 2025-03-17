import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers/index"; // Ensure reducers are combined

const store = configureStore({
  reducer: reducers,
});

export default store;
