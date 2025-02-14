import { Router } from "express";
import { 
  createQuiz, 
  getQuizzes, 
  getQuizById,
  updateQuiz, 
  deleteQuiz 
} from "../controllers/quize";

const router = Router();

/**
 * @swagger
 * /quizzes:
 *   post:
 *     summary: Create a new quiz
 *     description: Adds a new quiz to the database.
 *     tags: [Quizzes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               userId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Quiz created successfully
 *       500:
 *         description: Error creating quiz
 */
router.post("/quizzes", createQuiz);

/**
 * @swagger
 * /quizzes:
 *   get:
 *     summary: Get all quizzes
 *     description: Fetches all quizzes from the database.
 *     tags: [Quizzes]
 *     responses:
 *       200:
 *         description: Successfully retrieved quizzes
 *       500:
 *         description: Error fetching quizzes
 */
router.get("/quizzes", getQuizzes);

/**
 * @swagger
 * /quizzes/{id}:
 *   get:
 *     summary: Get a quiz by ID
 *     description: Fetch a quiz by its unique ID.
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Successfully retrieved quiz
 *       404:
 *         description: Quiz not found
 *       500:
 *         description: Error fetching quiz
 */
router.get("/quizzes/:id", getQuizById);

/**
 * @swagger
 * /quizzes/{id}:
 *   put:
 *     summary: Update a quiz
 *     description: Updates quiz details.
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *     responses:
 *       200:
 *         description: Quiz updated successfully
 *       500:
 *         description: Error updating quiz
 */
router.put("/quizzes/:id", updateQuiz);

/**
 * @swagger
 * /quizzes/{id}:
 *   delete:
 *     summary: Delete a quiz
 *     description: Deletes a quiz by ID.
 *     tags: [Quizzes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Quiz deleted successfully
 *       500:
 *         description: Error deleting quiz
 */
router.delete("/quizzes/:id", deleteQuiz);

export default router;
