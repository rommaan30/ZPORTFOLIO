// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb://127.0.0.1:27017/test");
//     console.log("Database connected");
//   } catch (error) {
//     console.error(error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;

const mongoose = require("mongoose");

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
