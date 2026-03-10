const express = require('express');
const router = express.Router();
const { getProjects, createProject } = require('../controllers/projectController');

router.get('/', getProjects);
router.post('/', createProject); // Later, we'll protect this with JWT

module.exports = router;