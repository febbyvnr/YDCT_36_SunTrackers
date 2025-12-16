import express from "express";
import Panel from "../src/models/Panel.js";

const router = express.Router();

// POST: save data panel
router.post("/", async (req, res) => {
  try {
    const created = await Panel.create(req.body);
    return res.status(201).json(created);
  } catch (err) {
    return res.status(400).json({
      message: "Failed to save panel data",
      error: err.message,
    });
  }
});

// GET: list data
router.get("/", async (_req, res) => {
  const items = await Panel.find().sort({ createdAt: -1 });
  res.json(items);
});

export default router;