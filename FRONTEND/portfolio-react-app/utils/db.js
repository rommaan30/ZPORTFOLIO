const mongoose = require("mongoose");
import { PrismaClient } from "@prisma/client";

const connectDB = async () => {
  try {
    // Replace <your_mongo_uri> with your MongoDB URI
    const DATABASE_URL =
      "mongodb+srv://rommankhan05:2SXkrUo0iO0GqK2I@cluster0.3tqnp.mongodb.net/zportfolio";

    await mongoose.connect(DATABASE_URL, {});

    console.log("Database connected successfully");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
