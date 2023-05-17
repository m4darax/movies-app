import axios from "axios"
import { URL_BASE } from "./urlConst";

export const findAllGender  = async() => {
    try {
      const response =  await axios.get(URL_BASE+"/genderall");
      //console.log(response)
      return response;
    } catch (error) {
      console.error(error) 
    }
    return null;
  }