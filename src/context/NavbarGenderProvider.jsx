
import { useNavbar } from "../hooks/useNavbar";
import { NavbarGenderContext } from "./NavbarGenderContext";

export const NavbarGenderProvider = ({children}) => {

    const { 
        navbarGenders,
        getGender
    } = useNavbar();

  return (
    <NavbarGenderContext.Provider value={
        {
            navbarGenders,
            getGender
        }
    }>
        {children}
    </NavbarGenderContext.Provider>
    );
}
