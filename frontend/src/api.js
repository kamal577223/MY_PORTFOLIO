import axios from 'axios';

// Create an axios instance with your local backend URL
const API = axios.create({
  baseURL: 'http://localhost:5000/api',
});

export const fetchProjects = (category) => {
  const url = category ? `/projects?category=${category}` : '/projects';
  return API.get(url);
};

export default API;