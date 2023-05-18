import { useEffect } from "react"
import { NavbarRow } from "./NavbarRow";
import { NavLink } from "react-router-dom";
import { useNavbar } from "../../hooks/useNavbar";
import { useMovies } from "../../hooks/useMovies";
import { useDispatch } from "react-redux";
import { onSelectedGender } from "../../store/navbar/navbarSlice";

export const Navbar = () => {

    const { navbarGenders, getGender, gender } = useNavbar();
    const { getMovies, handlerMovieSelectBody, movie } = useMovies();
    const dispatch = useDispatch();

    useEffect(() => {
        getGender()
    }, [])

    const getMoviesSelectedGender = () => {
        getMovies();
        handlerMovieSelectBody({})
        dispatch(onSelectedGender(0)) // inicializas las categorais
    }

    return (
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <NavLink className="flex items-center" to={"/movies"}>
                <img src="https://static.rfstat.com/renderforest/images/v2/landing-pics/logo_landing/Website/website_logo_8.png" className="h-8 mr-3 opacity-75" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white" onClick={getMoviesSelectedGender}>Movies</span>
            </NavLink>
            <div className="flex items-center w-auto">
                <label form="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required/>
                </div>
            </div>
            {
                Object.keys(movie).length === 0 && <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                    <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 pl-3 pr-4  text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent">{gender}<svg className="w-5 h-5 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip="evenodd"></path></svg></button>
                            <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                <ul className="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                                    {
                                        navbarGenders.map( gender => (
                                            <NavbarRow key={gender.id} gender={gender} />
                                        ))
                                    }
                                </ul>
                            </div>
                        </li>
                    </ul>
                </div>
            }
            </div>
        </nav>
    )
}
