import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

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

app.get("/users", (req, res) => {
  res.send("Hello user");
});

app.listen(9090, () => {
  connect();
  console.log("Started!");
})