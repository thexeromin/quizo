import { API } from "@/constants";
import axios from "axios";

interface LoginResponse {
  msg: string;
  userId: string;
}

interface LoginError {
  error: string;
}

export async function loginUserAPI(
  email: string,
  password: string
): Promise<LoginResponse> {
  try {
    const response = await axios.post<LoginResponse>(`${API}/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw error.response?.data as LoginError;
    } else {
      throw new Error("Something went wrong");
    }
  }
}
