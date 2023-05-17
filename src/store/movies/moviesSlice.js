import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies : []
    },
    reducers: {
        onLoadMovies: (state , action ) => {
            state.movies = [...action.payload]
        },
        onFilterGender: ( state, action ) => {
            state.movies = state.movies.filter( movie => movie.genders.some( gender => gender.id == action.payload ))
        }
    }
})

export const {
    onLoadMovies,
    onFilterGender
} = moviesSlice.actions