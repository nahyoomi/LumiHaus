import axios from "axios";
import { LoginCredentials, LoginResponse } from "../interfaces/User";

const BASE_URL = import.meta.env.VITE_API_URL;

export const authService = {
  login: async (credentials: LoginCredentials): Promise<LoginResponse> => {
    try {
      const { data } = await axios.post<LoginResponse>(
        `${BASE_URL}/auth/login`,
        credentials,
        { headers: { "Content-Type": "application/json" } }
      );
      return data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || "Error trying to login");
    }
  },

  getProfile: async (token: string) => {
    try {
      const { data } = await axios.get(`${BASE_URL}/auth/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return data;
    } catch (error: any) {
      throw new Error("Error trying to get profile");
    }
  },
};