import axios from "axios";

const Axios = axios.create({
  baseURL: "http://localhost:3001",
  withCredentials: false,
});

export default Axios;
