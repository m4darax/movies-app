import axios from "axios"

export const findAll = async () => {
  try {
    const response =  await axios.get('http://localhost:8080/findall');
    return response;
    
  } catch (error) {
    console.error(error)
  }
  return null;
}
