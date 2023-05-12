import { useMovies } from "../hooks/useMovies";
import { MoviesContext } from "./MoviesContext"

export const MoviesProvider = ({children}) => {

    const {
        movies,
        getMovies,
    } = useMovies();

    return (
        <MoviesContext.Provider value={
            {
                movies,
                getMovies,
            }
        }>
            {children}
        </MoviesContext.Provider>
    );

}