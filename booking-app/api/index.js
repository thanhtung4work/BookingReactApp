import express, { json } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import roomRouter from "./routes/rooms.js";
import transactionRouter from "./routes/transaction.js";
import realEstateRouter from "./routes/real-estate.js";
import cookieParser from "cookie-parser";

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

// API
app.use(cookieParser());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/room", roomRouter);
app.use("/api/user", userRouter);
app.use("/api/transaction", transactionRouter);
app.use("/api/realestate", realEstateRouter);

// Error Middleware 

app.use((err, req, res, next) => {
  const statusErr = err.status || 500;
  const messageErr = err.message || "Something went wrong!!!";
  return res.status(statusErr).json({
    success: false,
    status: statusErr,
    message: messageErr,
    stack: err.stack
  });
})


app.listen(9090, () => {
  connect();
  console.log("Started!");
})