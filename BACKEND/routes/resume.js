const express = require("express");
const router = express.Router();
const {
  getResume,
  updateResume,
  deleteResume,
} = require("../controller/resumeController");

// Routes for resume
router.get("/api/resume", getResume);
router.post("/api/resume", updateResume);
router.delete("/api/resume", deleteResume);

module.exports = router;
s;
