const express = require("express");
const router = express.Router();

// Render Login page
router.get("/login", (req, res) => {
  res.render("login"); // This renders login.ejs in the views folder
});

// Login route (POST request)
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // Check if admin exists
  // If you don't have an Admin model, you can skip this part or create a dummy validation
  if (email === "rommankhan05@gmail.com" && password === "romman@123") {
    // Session handling here (e.g., store email in session)
    req.session.admin = { email };
    res.redirect("/dashboard"); // Redirect to dashboard after successful login
  } else {
    res.status(401).send("Invalid credentials");
  }
});

// Logout route
router.get("/logout", (req, res) => {
  req.session.destroy(() => {
    res.redirect("/login"); // Redirect back to login page after logout
  });
});

module.exports = router;
