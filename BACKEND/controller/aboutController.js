// controllers/aboutController.js
const About = require("../models/about");

// Get About Data
exports.getAboutData = async (req, res) => {
  try {
    const about = await About.findOne(); // Assumes a single "About" document
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch about data" });
  }
};

// Update About Data
exports.updateAboutData = async (req, res) => {
  const { title, description } = req.body;
  try {
    const about = await About.findOneAndUpdate(
      {}, // Find the existing document (first one)
      { title, description, updatedAt: Date.now() },
      { new: true, upsert: true } // Create if not exists
    );
    res.status(200).json(about);
  } catch (error) {
    res.status(500).json({ error: "Failed to update about data" });
  }
};
