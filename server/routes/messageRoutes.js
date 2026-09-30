const express = require("express");
const router = express.Router();
const Message = require("../models/Message");

// GET /api/messages — list all messages
router.get("/", async (req, res, next) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 });
    res.json({ success: true, count: messages.length, data: messages });
  } catch (err) {
    next(err);
  }
});

// POST /api/messages — submit a contact message
router.post("/", async (req, res, next) => {
  try {
    const message = await Message.create(req.body);
    res.status(201).json({ success: true, data: message });
  } catch (err) {
    next(err);
  }
});

// PATCH /api/messages/:id/read — mark message as read
router.patch("/:id/read", async (req, res, next) => {
  try {
    const message = await Message.findByIdAndUpdate(
      req.params.id,
      { isRead: true },
      { new: true }
    );
    if (!message) {
      return res.status(404).json({ success: false, error: "Message not found" });
    }
    res.json({ success: true, data: message });
  } catch (err) {
    next(err);
  }
});

// DELETE /api/messages/:id — delete a message
router.delete("/:id", async (req, res, next) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (!message) {
      return res.status(404).json({ success: false, error: "Message not found" });
    }
    res.json({ success: true, data: {} });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
