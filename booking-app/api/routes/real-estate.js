import express from "express";
import { createRealEstate, deleteRealEstate, getRealEstate, getRealEstateAll, updateRealEstate } from "../controllers/real-estate.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create

router.post("/",verifyAdmin , createRealEstate);

//Delete

router.delete("/:id",verifyAdmin,deleteRealEstate);

//Update
router.put("/:id",verifyAdmin,updateRealEstate);

//Get by id
router.get("/:id", getRealEstate);

//Get all
router.get("/", getRealEstateAll);


export default router;