import { Navigate, Route, Routes } from "react-router-dom";
import { MoviePage } from "../pages/MoviePage";
import { Navbar } from "../components/main/Navbar";
import { MovieDescription } from "../pages/MovieDescription";
import { MoviesProvider } from "../context/MoviesProvider";

export const MovieRoutes = () => {
  return (
    <>
      <MoviesProvider>
        <Navbar />
        <Routes>
          <Route path="movies" element={<MoviePage />} />
          <Route path="/body" element={<MovieDescription />} />
          <Route path="/" element={<Navigate to="/movies" />} />
        </Routes>
      </MoviesProvider>
    </>
  );
};
