import express from "express";
import { createRealEstate, deleteRealEstate, getRealEstate, getRealEstateAll, updateRealEstate } from "../controllers/real-estate.js";

const router = express.Router();

// Create

router.post("/", createRealEstate);

//Delete

router.delete("/:id", deleteRealEstate);

//Update
router.put("/:id", updateRealEstate);

//Get by id
router.get("/:id", getRealEstate);

//Get all
router.get("/", getRealEstateAll);


export default router;