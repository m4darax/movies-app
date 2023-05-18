import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMovies } from "../../hooks/useMovies";

export const BodyMovie = () => {
  const { movies = [], movie, getMovies, handlerMovieSelectBody } = useMovies();
  const { qualification } = useParams();


  useEffect(() => {
    if (movies.length === 0) {
      getMovies();
    } else {
      const movie = movies.find((movie) => movie.qualification == qualification );
      console.log(movie)
      handlerMovieSelectBody(movie);
    }
  }, [qualification, movies, getMovies]);


  if (movies.length === 0 || !movie) {
    return; // O muestra un spinner de carga mientras se obtienen las películas
  }

  return (
    <>
      <div className="container mx-auto my-4">
        <div className="flex flex-row">
          <div className="w-2/6 p-4">
            <img
              src={movie.urlFrontPage}
              alt="Imagen del producto"
              className="max-h-96 w-80"
            />
          </div>
          <div className="w-4/6 p-4 flex items-start">
            <div className="text-white">
              <h2 className="font-bold">{movie.qualification}</h2>
              <p>Título Original: {movie.qualification}</p>
              <p>Año: {movie.anio}</p>
              <p>Géneros: {movie.genders && movie.genders.map( gen => (gen.name)).join(", ")}</p>
              <p>{movie.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center h-screen">
        <video className="h-450" controls>
          {/* <source src={miVideo} type="video/mp4" /> */}
          Tu navegador no soporta el elemento video.
        </video>
      </div>
    </>
  );
};
