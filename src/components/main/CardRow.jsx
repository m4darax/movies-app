import { NavLink } from "react-router-dom";

export const CardRow = ({movie}) => {

  return (
    <div key={movie.id} style={{ cursor: 'pointer'}} >
      <NavLink to={`/movies/${movie.qualification}`}>
        <img className="h-80 max-w-full rounded-lg" src={movie.urlFrontPage} alt="Pelicula" />
      </NavLink>
    </div>
  )
}
