import { findAllGender } from "../services/navbarService"
import { useDispatch, useSelector } from "react-redux";
import { onGenderList } from "../store/navbar/navbarSlice";
import { onFilterGender } from "../store/movies/moviesSlice";
import { useMovies } from "./useMovies";

export const useNavbar = () => {

    const { navbarGenders } = useSelector(state => state.navbar);
    const dispatch = useDispatch();

    const { getMovies } = useMovies();


    const getGender = async () => {
        const result = await findAllGender();
        dispatch(onGenderList(result.data))
    }

    const filterGender = async (id) => {
      await getMovies()
      dispatch(onFilterGender(id))
    }

  return {
    navbarGenders,
    getGender,
    filterGender
  }
}
