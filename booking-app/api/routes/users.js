import express from "express";
import User from "../model/User.js";


const router = express.Router();

// Create

router.post("/", async (req, res) => {
    
    const requestUser = new User(req.body);
    try {
        
        const saveUser = await requestUser.save();
        res.status(200).json(saveUser); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete

router.delete("/:id", async (req, res) => {
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Update
router.put("/:id", async (req, res) => {
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateUser); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get by id
router.get("/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        res.status(200).json(user); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get all
router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users); 
    } catch (error) {
        res.status(500).json(error);
    }
});



export default router;