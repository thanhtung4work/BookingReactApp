import express from "express";
import { createTransaction, deleteTransaction, getTransaction, getTransactionAll, updateTransaction } from "../controllers/transaction.js";
const router = express.Router();

// Create

router.post("/", createTransaction);
//Delete
router.delete("/:id", deleteTransaction);
//Update
router.put("/:id", updateTransaction);
//Get by id
router.get("/:id", getTransaction);
//Get all
router.get("/", getTransactionAll);

export default router;