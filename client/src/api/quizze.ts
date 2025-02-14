import axios from "axios";
import { API } from "@/constants";
import { Quiz } from "@/types";

export async function getQuizzesAPI(): Promise<Quiz[]> {
  try {
    const response = await axios.get<Quiz[]>(`${API}/quizzes`);
    return response.data;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to fetch quizzes");
    } else {
      throw new Error("Something went wrong");
    }
  }
}

export async function addQuizAPI(
  title: string,
  description: string,
  userId: string
): Promise<void> {
  try {
    await axios.post(`${API}/quizzes`, { title, description, userId });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to save quiz");
    } else {
      throw new Error("Something went wrong");
    }
  }
}

export async function updateQuizAPI(
  id: string,
  title: string,
  description: string
): Promise<void> {
  try {
    await axios.put(`${API}/quizzes/${id}`, { title, description });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to update quiz");
    } else {
      throw new Error("Something went wrong");
    }
  }
}

export async function deleteQuizAPI(id: string): Promise<void> {
  try {
    await axios.delete(`${API}/quizzes/${id}`);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to delete quiz");
    } else {
      throw new Error("Something went wrong");
    }
  }
}
