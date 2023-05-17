import { useDispatch, useSelector } from "react-redux";
import { findAll } from "../services/moviesService";
import { onLoadMovies } from "../store/movies/moviesSlice";

export const useMovies = () => {

    const { movies } = useSelector( state => state.movies)
    const dispatch = useDispatch();

    const getMovies = async () => {
        const result = await findAll();
        dispatch(onLoadMovies(result.data))
        console.log('getmovies')
    }

    return {
        movies,
        getMovies
    }
}
