import express from "express";
import Room from "../model/Room.js";


const router = express.Router();

// Create

router.post("/", async (req, res) => {
    
    const requestRoom = new Room(req.body);
    try {
        
        const saveRoom = await requestRoom.save();
        res.status(200).json(saveRoom); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete

router.delete("/:id", async (req, res) => {
    try {
        const deleteRoom = await Room.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Update
router.put("/:id", async (req, res) => {
    try {
        const updateRoom = await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateRoom); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get by id
router.get("/:id", async (req, res) => {
    try {
        const room = await Room.findById(req.params.id);
        res.status(200).json(room); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get all
router.get("/", async (req, res) => {
    try {
        const rooms = await Room.find();
        res.status(200).json(rooms); 
    } catch (error) {
        res.status(500).json(error);
    }
});



export default router;