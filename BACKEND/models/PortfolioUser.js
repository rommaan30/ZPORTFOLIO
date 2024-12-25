const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  degree: String,
  institution: String,
  duration: String
});

const experienceSchema = new mongoose.Schema({
  title: String,
  company: String,
  duration: String,
  responsibilities: [String]
});

const portfolioUserSchema = new mongoose.Schema({
  email: String,
  password: String,
  about: {
    title: String,
    description: String
  },
  resumeURL: String,
  education: [educationSchema],
  experience: [experienceSchema]
});

const PortfolioUser = mongoose.model('PortfolioUser', portfolioUserSchema);

module.exports = PortfolioUser;