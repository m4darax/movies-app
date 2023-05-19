import { createSlice } from "@reduxjs/toolkit";

export const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies : [],
        movie : {},
        searchMovie: []
    },
    reducers: {
        onLoadMovies: (state , action ) => {
            state.movies = [...action.payload]
        },
        onFilterGender: ( state, action ) => {
            state.movies = state.movies.filter( movie => movie.genders.some( gender => gender.id == action.payload ))
        },
        onMovieSelectBody: ( state, action ) => {
            state.movie = action.payload
        },
        onSearchMovie: ( state, action ) => {
            console.log(state.movies)
            state.searchMovie = state.movies.filter( movie => movie.qualification.toLowerCase().includes(action.payload.toLowerCase()))
        }
    }
})

export const {
    onLoadMovies,
    onFilterGender,
    onMovieSelectBody,
    onSearchMovie
} = moviesSlice.actions