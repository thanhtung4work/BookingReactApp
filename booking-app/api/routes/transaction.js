import express from "express";

import Transaction from "../model/Transaction.js";


const router = express.Router();

// Create

router.post("/", async (req, res) => {
    
    const requestTransaction = new Transaction(req.body);
    try {
        
        const saveTransaction = await requestTransaction.save();
        res.status(200).json(saveTransaction); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete

router.delete("/:id", async (req, res) => {
    try {
        const deleteTransaction = await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Update
router.put("/:id", async (req, res) => {
    try {
        const updateTransaction = await Transaction.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateTransaction); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get by id
router.get("/:id", async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        res.status(200).json(transaction); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get all
router.get("/", async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions); 
    } catch (error) {
        res.status(500).json(error);
    }
});


export default router;