import cors from "cors";
import dotenv from "dotenv";
import express, { Request, Response } from "express";
import { setupSwagger } from "./config/swagger";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// routes
import quizeRoutes from "./routes/quize";
import authRoutes from "./routes/auth";

// middlewares
app.use(cors());
app.use(express.json());

setupSwagger(app);

// routes
app.use("/", quizeRoutes);
app.use("/", authRoutes);
app.get("/", (_req: Request, res: Response) => {
  res.send("Works! <a href='/docs'>Click here for api docs</a>");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});
