import axios from "axios";
import { useToken } from "../auth/useToken";

const BASE_URL = "http://localhost:5000/api";

const rAuthApi = () => {
  const resident = axios.create({
    baseURL: BASE_URL,
  });

  return resident;
};

const rAuthApiWithAuth = () => {
  let apiConfig = rAuthApi();
  const token = localStorage.getItem("token");

  apiConfig.defaults.headers.common.Authorization = `Bearer ${token}`;
  return apiConfig;
};

export { rAuthApi, rAuthApiWithAuth };
