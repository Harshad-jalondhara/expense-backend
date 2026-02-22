import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {ConnectDB} from "./config/db.js"
import authRoutes from "./routes/authRoutes.js";
import expenseRoutes from "./routes/expenseRoutes.js";

dotenv.config();

const start = async () => {
  try {
    await ConnectDB();
    console.log("DB Connected");
  } catch (error) {
    console.error(error);
  }
};

start();

const app = express();

app.use(cors({
  origin: "*"
}));

app.get("/", (req, res) => {
  res.send("Home Page Server");
})


app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/expenses", expenseRoutes);

app.get("/", (req, res) => {
  res.send("Expense Tracker API Running 🚀");
});

export default app;