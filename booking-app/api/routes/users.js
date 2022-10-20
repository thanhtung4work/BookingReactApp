import express from "express";
import { createUser, deleteUser, getUser, getUserAll, updateUser } from "../controllers/user.js";
import { verifyAdmin, verifyStaff, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = express.Router();

//authentication
router.get("/authentication", verifyToken, (req, res, next) => {
    res.send("Logging success");
});
//test authorized
/*
router.get("/authorizedUser/:id",verifyUser, (req, res, next) => {
    res.send("Logging success and authorized user");
} );
router.get("/authorizedStaff",verifyStaff, (req, res, next) => {
    res.send("Logging success and authorized staff");
} );
router.get("/authorizedAdmin",verifyAdmin, (req, res, next) => {
    res.send("Logging success and authorized admin");
} );*/
// Create
router.post("/", createUser);
//Delete
router.delete("/:id",verifyStaff, deleteUser);
//Update
router.put("/:id", updateUser);
//Get by id
router.get("/:id", getUser);
//Get all
router.get("/", getUserAll);



export default router;