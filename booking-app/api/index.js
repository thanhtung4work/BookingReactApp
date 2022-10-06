import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/auth.js";
import roomRouter from "./routes/auth.js";
import transactionRouter from "./routes/auth.js";
import realEstateRouter from "./routes/auth.js";

const app = express();
dotenv.config();

const connect = async () => {
  try{
    await mongoose.connect(process.env.MONGODB);
    console.log("Connected to mongodb");
  } catch (error) {
    throw error;
  }
}

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

app.use("/auth", authRouter);

app.listen(9090, () => {
  connect();
  console.log("Started!");
})