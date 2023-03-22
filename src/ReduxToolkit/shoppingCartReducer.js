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
            return state.filter((shop) => shop.id !== action.payload.id);
        },
        /*completeTodo: (state, action) => {
          return state.map((todo) => {
            if (todo.id === action.payload.id) {
              return {
                ...todo,
                completed: !todo.completed,
              };
            }
            return todo;
          });
        },*/
    },
});

export const { addToShoppingCart, deleteFromShoppingCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
