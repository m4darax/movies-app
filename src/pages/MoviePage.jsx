import { useEffect } from "react";
import { CardMovie } from "../components/main/CardMovie";
import { useMovies } from "../hooks/useMovies";

export const MoviePage = () => {

  const { movies = [], getMovies } = useMovies();

  useEffect(() => {
    getMovies();
  }, [])

  return (
    <>
      {
        movies.length > 0 ? (
          <>
            <CardMovie />
          </>  )
          :
          <div className="bg-red-500 text-white">
            No hay peliculas para mostrar
          </div>
      }
    </>
  )
}
