import axios from "axios";
import { getToken } from "./main/auth";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
    config.headers.post['Content-Type'] = "multipart/form-data"
    //config.headers.post['Content-type']= 'application/x-www-form-urlencoded'
  }
  return config;
});

export default api;