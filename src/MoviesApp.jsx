import { Route, Routes } from "react-router-dom"
import { MovieRoutes } from "./routes/MovieRoutes"

export const MoviesApp = () => {

  return (
    <>
     <Routes>
        <Route path="/*" element={<MovieRoutes/>}/>
     </Routes>
    </>
  )
}
