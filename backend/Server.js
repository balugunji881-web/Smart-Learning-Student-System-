import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/database.js";

import authRoutes from "./routes/authRoutes.js";
import studentRoutes from "./routes/studentRoutes.js";
import courseRoutes from "./routes/courseRoutes.js";
import assignmentRoutes from "./routes/assignmentRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoutes);

app.use("/api/students", studentRoutes);

app.use("/api/courses", courseRoutes);

app.use(
  "/api/assignments",
  assignmentRoutes
);

app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.send(
    "Student Learning Portal API Running"
  );
});

app.listen(
  process.env.PORT,
  () => {
    console.log(
      `Server Running On Port ${process.env.PORT}`
    );
  }
);