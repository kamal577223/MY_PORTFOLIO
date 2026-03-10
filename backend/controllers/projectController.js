const Project = require('../models/Project');

// @desc    Get all projects with optional category filtering
// @route   GET /api/projects
exports.getProjects = async (req, res) => {
  try {
    // Check if there is a category query in the URL (e.g., ?category=Data Science)
    const category = req.query.category;
    const query = category ? { category } : {};

    const projects = await Project.find(query).sort({ createdAt: -1 });
    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

// @desc    Add a new project (For your future admin panel)
// @route   POST /api/projects
exports.createProject = async (req, res) => {
  try {
    const newProject = await Project.create(req.body);
    res.status(201).json(newProject);
  } catch (error) {
    res.status(400).json({ message: "Invalid Data", error: error.message });
  }
};