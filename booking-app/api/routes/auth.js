import express from "express";


const router = express.Router();

router.get("/", (req, res) => {
    res.send("hesss");
}); 

export default router;