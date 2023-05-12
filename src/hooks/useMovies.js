import { useReducer } from "react";
import { moviesReducers } from "../reducers/moviesReducers";
import { findAll } from "../services/moviesService";

const initialMovies = [];
export const useMovies = () => {

    const [movies, dispatch] = useReducer(moviesReducers, initialMovies)

    const getMovies = async () => {
        const result = await findAll();
        console.log(result)
        dispatch({
            type: 'loadMovies',
            payload: result.data
        })
    }

    return {
        movies,
        getMovies
    }
  
}
