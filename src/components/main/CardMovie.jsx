import { CardRow } from "./CardRow";
import { useMovies } from "../../hooks/useMovies";

export const CardMovie = () => {

    const { movies = [] } = useMovies()

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* <div className="grid grid-cols-6 md:grid-cols-6 gap-6 my-3"> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 my-3">
                    {
                        movies.map((movie) => (
                            <CardRow key={movie.id} movie={movie}/>
                        ))
                    }
                </div>
            </div>
        </>
    );
};
