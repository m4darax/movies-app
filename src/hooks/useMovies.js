import { useDispatch, useSelector } from "react-redux";
import { findAll } from "../services/moviesService";
import { onLoadMovies, onMovieSelectBody } from "../store/movies/moviesSlice";

export const useMovies = () => {

    const { movies, movie } = useSelector( state => state.movies)
    const dispatch = useDispatch();

    const getMovies = async () => {
        const result = await findAll();
        dispatch(onLoadMovies(result.data))
    }

    const handlerMovieSelectBody = async (movie) => {
        dispatch(onMovieSelectBody(movie))
    }

    return {
        movies,
        movie,
        getMovies,
        handlerMovieSelectBody
    }
}
