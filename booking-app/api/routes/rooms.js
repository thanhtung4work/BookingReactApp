import express from "express";
import { createRoom, deleteRoom, getRoom, getRoomAll, updateRoom } from "../controllers/room.js";


const router = express.Router();

// Create

router.post("/", createRoom);

//Delete

router.delete("/:id", deleteRoom);

//Update
router.put("/:id", updateRoom);

//Get by id
router.get("/:id", getRoom);

//Get all
router.get("/", getRoomAll);



export default router;