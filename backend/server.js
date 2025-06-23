import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";

const app = express();
const PORT = process.env.PORT || 4000;
connectDB();

app.use(express.json());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the backend server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
