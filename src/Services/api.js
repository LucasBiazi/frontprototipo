//importando axios
import axios from "axios";

//passando o url para a api
const api = axios.create({
    baseURL: "http://localhost:3336"
  });
  
export default api;