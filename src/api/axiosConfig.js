import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000", // Your backend base URL here
});

export default instance;
