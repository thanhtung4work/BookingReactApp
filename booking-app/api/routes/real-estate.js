import express from "express";


import RealEstate from "../model/RealEstate.js";


const router = express.Router();

// Create

router.post("/", async (req, res) => {
    
    const requestRealEstate = new RealEstate(req.body);
    try {
        
        const saveRealEstate = await requestRealEstate.save();
        res.status(200).json(saveRealEstate); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Delete

router.delete("/:id", async (req, res) => {
    try {
        const deleteRealEstate = await RealEstate.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete has been!"); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Update
router.put("/:id", async (req, res) => {
    try {
        const updateRealEstate = await RealEstate.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
        res.status(200).json(updateRealEstate); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get by id
router.get("/:id", async (req, res) => {
    try {
        const realestate = await RealEstate.findById(req.params.id);
        res.status(200).json(realestate); 
    } catch (error) {
        res.status(500).json(error);
    }
});

//Get all
router.get("/", async (req, res) => {
    try {
        const realestates = await RealEstate.find();
        res.status(200).json(realestates); 
    } catch (error) {
        res.status(500).json(error);
    }
});


export default router;