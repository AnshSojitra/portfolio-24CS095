/**
 * Seed script — populates MongoDB with initial portfolio data.
 * Run:  node seed.js
 */
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Project = require("./models/Project");
const Skill = require("./models/Skill");

dotenv.config();

const projects = [
  {
    title: "Weather App",
    description:
      "A responsive weather application built with React that fetches real-time weather data and displays forecasts.",
    techStack: ["React", "CSS", "OpenWeather API"],
  },
  {
    title: "Todo List",
    description:
      "A feature-rich task manager with drag-and-drop reordering, local storage persistence, and filter options.",
    techStack: ["React", "JavaScript", "LocalStorage"],
  },
  {
    title: "Portfolio Website",
    description:
      "This portfolio site built with React + Vite showcasing my skills, projects, and contact information.",
    techStack: ["React", "Vite", "CSS"],
  },
];

const skills = [
  { name: "HTML", category: "Frontend", proficiency: 90 },
  { name: "CSS", category: "Frontend", proficiency: 85 },
  { name: "JavaScript", category: "Frontend", proficiency: 80 },
  { name: "React", category: "Frontend", proficiency: 75 },
  { name: "Node.js", category: "Backend", proficiency: 60 },
  { name: "MongoDB", category: "Database", proficiency: 55 },
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to MongoDB");

    // Clear existing data
    await Project.deleteMany();
    await Skill.deleteMany();
    console.log("🗑️  Cleared existing projects & skills");

    // Insert seed data
    await Project.insertMany(projects);
    await Skill.insertMany(skills);
    console.log("🌱 Seed data inserted successfully");

    process.exit(0);
  } catch (err) {
    console.error(`❌ Seed error: ${err.message}`);
    process.exit(1);
  }
};

seedDB();
