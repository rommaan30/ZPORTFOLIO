const PortfolioUser = require("../models/PortfolioUser");

// /controllers/resumeController.js

// Dummy data
let resumeData = {
  education: [
    {
      degree: "B.Tech in Computer Science",
      institution: "Thakur College",
      duration: "2020 - 2024",
    },
    {
      degree: "High School",
      institution: "XYZ School",
      duration: "2018 - 2020",
    },
  ],
  experience: [
    {
      title: "MERN Stack Developer",
      company: "Tech Corp",
      duration: "2022 - Present",
      responsibilities: [
        "Developed web applications",
        "Led team projects",
        "Implemented RESTful APIs",
      ],
    },
  ],
};

// Controller to render the resume edit page
const getEditResume = (req, res) => {
  res.render("resume_edit", resumeData); // Pass data to the EJS template
};

// // Controller to handle resume updates
// const updateResume = (req, res) => {
//   // Parse and update education data
//   resumeData.education = req.body.education.map((edu) => ({
//     degree: edu.degree,
//     institution: edu.institution,
//     duration: edu.duration,
//   }));

//   // Parse and update experience data
//   resumeData.experience = req.body.experience.map((exp) => ({
//     title: exp.title,
//     company: exp.company,
//     duration: exp.duration,
//     responsibilities: exp.responsibilities.split(",").map((res) => res.trim()), // Split by comma
//   }));

//   res.redirect("/dashboard"); // Redirect to dashboard after saving
// };

// const updateResume = (req, res) => {
//   try {
//     console.log(req.body); // Log incoming data for debugging

//     if (!req.body.education || !req.body.experience) {
//       return res.status(400).send("Missing education or experience data");
//     }

//     // Update education
//     resumeData.education = req.body.education.map((edu) => ({
//       degree: edu.degree,
//       institution: edu.institution,
//       duration: edu.duration,
//     }));

//     // Update experience
//     resumeData.experience = req.body.experience.map((exp) => ({
//       title: exp.title,
//       company: exp.company,
//       duration: exp.duration,
//       responsibilities: exp.responsibilities
//         .split(",")
//         .map((res) => res.trim()),
//     }));

//     res.redirect("/dashboard"); // Redirect after successful update
//   } catch (error) {
//     console.error("Error updating resume:", error.message);
//     res.status(500).send("Internal Server Error");
//   }
// };

const updateResume = async (req, res) => {
  try {
    const { education, experience } = req.body;

    // Ensure data is provided
    if (!education || !experience) {
      return res.status(400).send("Missing education or experience data");
    }

    // Update the logged-in user's resume data
    const userId = req.user.id; // Assuming you have authentication middleware that sets req.user
    const updatedUser = await PortfolioUser.findByIdAndUpdate(
      userId,
      {
        education: education.map((edu) => ({
          degree: edu.degree,
          institution: edu.institution,
          duration: edu.duration,
        })),
        experience: experience.map((exp) => ({
          title: exp.title,
          company: exp.company,
          duration: exp.duration,
          responsibilities: exp.responsibilities
            .split(",")
            .map((res) => res.trim()),
        })),
      },
      { new: true } // Return updated document
    );

    if (!updatedUser) {
      return res.status(404).send("User not found");
    }

    res.redirect("/dashboard"); // Redirect to dashboard after saving
  } catch (error) {
    console.error("Error updating resume:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

const getResumeData = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have authentication middleware
    const user = await PortfolioUser.findById(userId);

    if (!user) {
      return res.status(404).send("User not found");
    }

    res.json({
      education: user.education,
      experience: user.experience,
    });
  } catch (error) {
    console.error("Error fetching resume data:", error.message);
    res.status(500).send("Internal Server Error");
  }
};

module.exports = { getEditResume, updateResume, getResumeData };
