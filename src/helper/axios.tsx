import axios from "axios";

// Set the baseURL dynamically using an environment variable or a default value
const api = axios.create({
  baseURL:  "https://ai.neovis.co.in/interview/", 
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default api;
