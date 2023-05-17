import { useNavbar } from "../../hooks/useNavbar";

export const NavbarRow = ({gender}) => {

    const { filterGender } = useNavbar();

    return (
        <li>
            <a className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => filterGender(gender.id)}>{gender.name}</a>
        </li>
    )
}
