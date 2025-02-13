import { Router } from "express";
import { login } from "../controllers/auth.ts";

const router = Router();

/**
 * @swagger
 * /login:
 *   post:
 *     summary: User login
 *     description: Logs in the user with hardcoded credentials and returns a user ID on success.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "sins93558@gmail.com"
 *               password:
 *                 type: string
 *                 example: "sins93558"
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: "success"
 *                 userId:
 *                   type: string
 *                   example: "cm73gkccw0000g7jos43nml1b"
 *       401:
 *         description: Unauthorized - Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Unauthorized"
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: "Error during login"
 */

router.post("/login", login);

export default router;