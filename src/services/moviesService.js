import axios from "axios"
import { URL_BASE } from "./urlConst";

export const findAll = async () => {
  try {
    const response =  await axios.get(URL_BASE+"/findall");
    console.log(response.data)
    return response;

  } catch (error) {
    console.error(error)
  }
  return null;
}

