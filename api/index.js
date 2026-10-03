import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";
import jobRoutes from "../routes/jobRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.get("/", (req, res) => {
    res.json({ message: "Job Portal API is running" });
});

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

export default app;
