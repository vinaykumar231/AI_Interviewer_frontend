import axios from "axios";

// Set the baseURL dynamically using an environment variable or a default value
const api = axios.create({
  baseURL: "https://2b7d-2405-201-37-21d9-8085-61bf-7ef8-f9d9.ngrok-free.app/", // Use environment variable if available
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
