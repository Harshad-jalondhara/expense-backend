import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    title:{
        type: String
    },
    amount:{
        type: Number
    },
    category:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }

}, {timestamps: true});

const Expense = mongoose.model("Expense", expenseSchema);

export default Expense