import express from "express";
import { createRoom, deleteRoom, getRoom, getRoomAll, updateRoom } from "../controllers/room.js";   
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// Create

router.post("/", verifyAdmin, createRoom);

//Delete

router.delete("/:id",verifyAdmin, deleteRoom);

//Update
router.put("/:id",verifyAdmin,updateRoom);

//Get by id
router.get("/:id", getRoom);

//Get all
router.get("/", getRoomAll);



export default router;