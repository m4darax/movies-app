import { useDispatch, useSelector } from "react-redux";
import { findAll } from "../services/moviesService";
import { onLoadMovies, onMovieSelectBody, onSearchMovie } from "../store/movies/moviesSlice";

export const useMovies = () => {

    const { movies, movie, searchMovie } = useSelector( state => state.movies)
    const dispatch = useDispatch();

    const getMovies = async () => {
        const result = await findAll();
        dispatch(onLoadMovies(result.data))
    }

    const handlerMovieSelectBody = async (movie) => {
        dispatch(onMovieSelectBody(movie))
    }

    const handlerSearchMovie = async (search) => {
        dispatch(onSearchMovie(search))
    }

    return {
        movies,
        movie,
        searchMovie,
        getMovies,
        handlerMovieSelectBody,
        handlerSearchMovie
    }
}
