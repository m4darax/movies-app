import { Navigate, Route, Routes } from "react-router-dom";
import { MoviePage } from "../pages/MoviePage";
import { Navbar } from "../components/main/Navbar";
import { MovieDescription } from "../pages/MovieDescription";
import { BodyMovie } from "../components/descriptionbodymovie.jsx/BodyMovie";

export const MovieRoutes = () => {

  return (
    <>
        <Navbar />
        <Routes>
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:qualification" element={<BodyMovie />}/>
          <Route path="/body" element={<MovieDescription />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
    </>
  );
};
