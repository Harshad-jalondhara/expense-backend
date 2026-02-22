import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {ConnectDB} from "./config/db.js"
import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();
ConnectDB();

const app = express();

app.use(cors({
  origin: "*"
}));



app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running 🚀");
});

export default app;