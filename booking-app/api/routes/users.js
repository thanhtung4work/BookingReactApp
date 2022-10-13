import express from "express";
import { createUser, deleteUser, getUser, getUserAll, updateUser } from "../controllers/user.js";



const router = express.Router();

// Create

router.post("/", createUser);

//Delete

router.delete("/:id", deleteUser);

//Update
router.put("/:id", updateUser);

//Get by id
router.get("/:id", getUser);

//Get all
router.get("/", getUserAll);



export default router;