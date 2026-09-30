const express = require("express");
const router = express.Router();
const Skill = require("../models/Skill");

// GET /api/skills — list all skills
router.get("/", async (req, res, next) => {
  try {
    const skills = await Skill.find().sort({ category: 1, name: 1 });
    res.json({ success: true, count: skills.length, data: skills });
  } catch (err) {
    next(err);
  }
});

// POST /api/skills — add a skill
router.post("/", async (req, res, next) => {
  try {
    const skill = await Skill.create(req.body);
    res.status(201).json({ success: true, data: skill });
  } catch (err) {
    next(err);
  }
});

// PUT /api/skills/:id — update a skill
router.put("/:id", async (req, res, next) => {
  try {
    const skill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!skill) {
      return res.status(404).json({ success: false, error: "Skill not found" });
    }
    res.json({ success: true, data: skill });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/skills/:id — remove a skill
router.delete("/:id", async (req, res, next) => {
  try {
    const skill = await Skill.findByIdAndDelete(req.params.id);
    if (!skill) {
      return res.status(404).json({ success: false, error: "Skill not found" });
    }
    res.json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
