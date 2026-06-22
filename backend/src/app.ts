import express from "express";
import cors from "cors";

import projectRoutes from "./routes/projectRoutes";
import skillRoutes from "./routes/skillRoutes";
import authRoutes from "./routes/authRoutes";
import resumeRoutes from "./routes/resumeRoutes";
import contactRoutes from "./routes/contactRoutes";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);
app.use("/api/contact", contactRoutes);
app.get("/", (req, res) => {
  res.send("Portfolio API Running...");
});

export default app;