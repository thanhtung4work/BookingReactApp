import express from "express";
import { countByCity, countByType, createRealEstate, deleteRealEstate, getRealEstate, getRealEstateRooms, getRealEstates, updateRealEstate } from "../controllers/real-estate.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

// Create
router.post("/",verifyAdmin , createRealEstate);
//Delete
router.delete("/:id",verifyAdmin,deleteRealEstate);

//Update
router.put("/:id",verifyAdmin,updateRealEstate);

//Get by id
router.get("/find/:id", getRealEstate);

//Get all
router.get("/", getRealEstates);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getRealEstateRooms);
export default router;