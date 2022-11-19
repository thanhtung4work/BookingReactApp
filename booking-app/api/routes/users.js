import express from "express";
import {  deleteUser, getUser, getUserAll, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

// Create
//Delete
router.delete("/:id", verifyUser,deleteUser);
//Update
router.put("/:id",verifyUser,updateUser);
//Get by id
router.get("/:id",verifyUser,getUser);
//Get all
router.get("/",verifyAdmin,getUserAll);



export default router;