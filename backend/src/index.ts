import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { router as recipeRouter } from "./routes/recipes.routes";
import { errorHandler, notFound } from "./middleware/error-handler";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", recipeRouter);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
