const mongoose = require('mongoose');
const dotenv = require('dotenv');
const projects = require('./data/projects');
const Project = require('./models/Project');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await Project.deleteMany(); // Clear existing data
    await Project.insertMany(projects);
    console.log('✅ Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
    process.exit(1);
  }
};

importData();