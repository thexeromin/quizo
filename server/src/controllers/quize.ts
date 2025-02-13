import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Create a new quiz
export const createQuiz = async (req: Request, res: Response) => {
  try {
    const { title, description, userId } = req.body;
    const quiz = await prisma.quiz.create({
      data: { title, description, userId },
    });
    res.status(201).json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Error creating quiz" });
  }
};

// Get all quizzes
export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await prisma.quiz.findMany({
      select: { id: true, title: true, description: true, createdAt: true },
    });
    res.json(quizzes);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Error fetching quizzes" });
  }
};

// Get a single quiz by ID
export const getQuizById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const quiz = await prisma.quiz.findUnique({
      where: { id },
      select: { id: true, title: true, description: true, createdAt: true },
    });
    if (!quiz) res.status(404).json({ error: "Quiz not found" });
    else res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Error fetching quiz" });
  }
};

// Update a quiz
export const updateQuiz = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const quiz = await prisma.quiz.update({
      where: { id },
      data: { title, description },
    });
    res.json(quiz);
  } catch (error) {
    res.status(500).json({ error: "Error updating quiz" });
  }
};

// Delete a quiz
export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.quiz.delete({ where: { id } });
    res.json({ message: "Quiz deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting quiz" });
  }
};
