import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesReducer";
import shoppingCartReducer from "./shoppingCartReducer";

export default configureStore({
  reducer: {
    shoppingCarts: shoppingCartReducer,
    favorites: favoritesReducer,
  },
});
