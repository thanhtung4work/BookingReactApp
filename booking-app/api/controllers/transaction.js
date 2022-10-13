import Transaction from "../model/Transaction.js";

//CREATE
export const createTransaction = async(req, res, next) => {
    const requestTransaction = new Transaction(req.body);
    try {
        
        const saveTransaction = await requestTransaction.save();
        res.status(200).json(saveTransaction); 
    } catch (error) {
        next(error);
    }
};

//READ
export const getTransaction = async(req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        res.status(200).json(transaction); 
    } catch (error) {
        next(error);
    }
};

export const getTransactionAll = async(req, res, next) => {
    try {
        const transactions = await Transaction.find();
        res.status(200).json(transactions); 
    } catch (error) {
        next(error);
    }
};


//UPDATE
export const updateTransaction = async(req, res, next) => {
    try {
        const updateTransaction = await Transaction.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateTransaction); 
    } catch (error) {
        next(error);
    }
};


//DELETE
export const deleteTransaction = async(req, res, next) => {
    try {
        const deleteTransaction = await Transaction.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        next(error);
    }
};