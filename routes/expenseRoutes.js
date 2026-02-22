import express from "express";
import Joi from "joi";
import Expense from "../models/expense.model.js";
import protect from "../middleware/authMiddleware.js";

const router = express.Router();

// ADD EXPENSE
router.post("/", protect, async (req, res) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    amount: Joi.number().required(),
    category: Joi.string().required()
  });

  const { error } = schema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  const expense = await Expense.create({
    ...req.body,
    user: req.user._id
  });

  res.json(expense);
});

// GET ALL EXPENSES
router.get("/", protect, async (req, res) => {
  const expenses = await Expense.find({ user: req.user._id }).sort({
    createdAt: -1
  });
  res.json(expenses);
});

// DELETE
router.delete("/:id", protect, async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

export default router;