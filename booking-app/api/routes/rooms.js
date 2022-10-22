import express from "express";
import { createRoom, deleteRoom, getRoom, getRoomAll, updateRoom, updateRoomAvailability } from "../controllers/room.js";   
import { verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();

// Create

router.post("/", verifyAdmin, createRoom);

//Delete

router.delete("/:id",verifyAdmin, deleteRoom);

//Update
router.put("/:id",verifyAdmin,updateRoom);
router.put("/availability/:id", updateRoomAvailability)

//Get by id
router.get("/:id", getRoom);

//Get all
router.get("/", getRoomAll);



export default router;