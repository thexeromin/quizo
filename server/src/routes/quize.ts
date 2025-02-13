import { Router } from "express";
import { 
  createQuiz, 
  getQuizzes, 
  updateQuiz, 
  deleteQuiz 
} from "../controllers/quize.ts";

const router = Router();

router.post("/quizzes", createQuiz);
router.get("/quizzes", getQuizzes);
// router.get("/quizzes/:id", getQuizById);
router.put("/quizzes/:id", updateQuiz);
router.delete("/quizzes/:id", deleteQuiz);

export default router;
