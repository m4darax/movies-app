import { configureStore } from "@reduxjs/toolkit";
import { moviesSlice } from "./movies/moviesSlice";
import { navbarSlice } from "./navbar/navbarSlice";

export const store = configureStore({
    reducer: {
        movies: moviesSlice.reducer,
        navbar: navbarSlice.reducer
    }
})