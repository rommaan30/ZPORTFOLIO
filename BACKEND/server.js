const express = require("express");
const session = require("express-session");
const passport = require("passport");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");
const dashboardRoutes = require("./routes/dashboard");

const bodyParser = require("body-parser");
const aboutRoutes = require("./routes/aboutRoutes");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({ secret: "your_secret_key", resave: false, saveUninitialized: true })
);

// Set up views
app.set("view engine", "ejs");

// Use routes
app.use(authRoutes);
// API routes
app.use("/api/about", aboutRoutes);

app.use(dashboardRoutes);

// Start server
app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
