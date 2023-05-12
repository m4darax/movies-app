import { useContext, useEffect } from "react";
import { CardMovie } from "../components/main/CardMovie";
import { MoviesContext } from "../context/MoviesContext";

export const MoviePage = () => {

  const { movies =[], getMovies } = useContext(MoviesContext)

  useEffect(() => {
    getMovies();
    console.log('MoviePage' + JSON.stringify(movies))
  }, [])


  return (
    <>
      {
        movies.lenngth > 0 ? ( <CardMovie /> ) 
          :
          <div className="bg-red-500 text-white">
            No hay peliculas para mostrar
          </div>
      }
    </>
  )
}
