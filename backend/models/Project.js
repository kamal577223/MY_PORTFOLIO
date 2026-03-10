const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, required: true },
  tags: [String], // e.g., ['MERN', 'SQL', 'Python']
  category: { 
    type: String, 
    enum: ['Software Development', 'Data Science', 'SNA'], 
    default: 'Software Development' 
  },
  imageUrl: { type: String },
  githubLink: { type: String },
  liveUrl: { type: String },
  featured: { type: Boolean, default: false }
}, { timestamps: true }); // Automatically adds createdAt and updatedAt

module.exports = mongoose.model('Project', ProjectSchema);