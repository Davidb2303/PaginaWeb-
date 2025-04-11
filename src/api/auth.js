import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001/api",
});

// Agregar token automáticamente si existe
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export const registerUser = (userData) => API.post("/register", userData);
export const loginUser = (credentials) => API.post("/login", credentials);
export const getProductsByCategory = (category) => API.get("/category", category)
export const getProductos = () => API.get("/productos");
export const getRecomendaciones = (categoria) =>
  axios.post("http://localhost:8000/recomendaciones", { categoria });