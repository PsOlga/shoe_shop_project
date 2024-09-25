import { productReducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    product: productReducer
  }
});

export default store;