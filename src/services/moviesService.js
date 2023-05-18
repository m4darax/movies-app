import axios from "axios"
import { URL_BASE } from "./urlConst";
import { dataMovies } from "../data/dataMovies"


export const findAll = async () => {
  try {
    //const response =  await axios.get(URL_BASE+"/findall");
    const response =  dataMovies;
    //console.log(response.data)
    return response;

  } catch (error) {
    console.error(error)
  }
  return null;
}

