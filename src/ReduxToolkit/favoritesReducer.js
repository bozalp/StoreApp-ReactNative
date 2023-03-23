import { createSlice } from "@reduxjs/toolkit";

const initialState = []

export const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    reducers: {
        addToFavorites: (state, action) => {
            state.push(action.payload);
        },
        deleteFromFavorites: (state, action) => {
            return state.filter((item) => item !== action.payload)
        },
    },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
