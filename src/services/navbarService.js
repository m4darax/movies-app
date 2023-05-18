import axios from "axios"
import { URL_BASE } from "./urlConst";
import { dataGenders } from "../data/dataGenders"

export const findAllGender  = async() => {
    try {
      //const response =  await axios.get(URL_BASE+"/genderall");
      const response =  dataGenders;
      //console.log(response)
      return response;
    } catch (error) {
      console.error(error) 
    }
    return null;
  }