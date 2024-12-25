// routes/aboutRoutes.js
const express = require("express");
const {
  getAboutData,
  updateAboutData,
} = require("../controller/aboutController");

const router = express.Router();

// GET endpoint to fetch about data
router.get("/", getAboutData);

// PUT endpoint to update about data
router.put("/", updateAboutData);

module.exports = router;
