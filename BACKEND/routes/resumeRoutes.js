// /routes/resumeRoutes.js
const express = require("express");
const {
  getEditResume,
  updateResume,
} = require("../controller/resumeController.js");
const { getResumeData } = require("../controller/resumeController");
const router = express.Router();

// Route to display the resume edit form
router.get("/dashboard/resume/edit", getEditResume);

router.get("/api/resume-data", (req, res) => {
  res.json({
    education: [
      {
        degree: "B.Tech",
        institution: "XYZ University",
        duration: "2018-2022",
      },
    ],
    experience: [
      {
        title: "Software Engineer",
        company: "ABC Corp",
        duration: "2022-Present",
        responsibilities: [
          "Developed REST APIs",
          "Implemented CI/CD pipelines",
        ],
      },
    ],
  });
});

// Route to handle form submission and update resume
router.post("/update-resume", updateResume);

module.exports = router;
