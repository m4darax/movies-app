import { useContext, useEffect } from "react";
import { MoviesContext } from "../../context/MoviesContext";

export const CardMovie = () => {

    const { movies = [] } = useContext(MoviesContext)

    useEffect(() => {
        console.log('CardMovie = ' + JSON.stringify(movies) )
    }, [])

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                {/* <div className="grid grid-cols-6 md:grid-cols-6 gap-6 my-3"> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 my-3">
                    {
                        movies.map((movie) => (
                            <div key={movie.id}>
                                <img className="h-80 max-w-full rounded-lg" src={movie.url_from_page} alt="" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};
