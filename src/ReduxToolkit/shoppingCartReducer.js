import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const shoppingCartSlice = createSlice({
    name: "shoppingCarts",
    initialState,
    reducers: {
        addToShoppingCart: (state, action) => {
            state.push(action.payload);
        },
        deleteFromShoppingCart: (state, action) => {
          return state.filter((shop) => shop !== action.payload)
        },
    },
});

export const { addToShoppingCart, deleteFromShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
