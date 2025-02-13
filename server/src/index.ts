import cors from "cors"
import dotenv from 'dotenv'
import express, { Request, Response } from "express"

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

// routes
import quizeRoutes from "./routes/quize.ts";

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api', quizeRoutes)
app.get('/', (req: Request, res: Response) => {
  res.status(200).send("Hello, World!");
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
})