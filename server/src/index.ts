import cors from "cors"
import dotenv from 'dotenv'
import express, { Request, Response } from "express"
import { setupSwagger } from "./config/swagger.ts";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5000;

// routes
import quizeRoutes from "./routes/quize.ts";

// middlewares
app.use(cors());
app.use(express.json());

setupSwagger(app);

// routes
app.use('/', quizeRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
})