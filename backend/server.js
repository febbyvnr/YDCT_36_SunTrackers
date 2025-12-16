import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import panelRoutes from "./routes/panelRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();

app.use(cors({ origin: "http://localhost:5173" })); // port frontend
app.use(express.json());

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/panels", panelRoutes);

const PORT = process.env.PORT || 5000;

connectDB(process.env.MONGO_URI).then(() => {
  app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
});