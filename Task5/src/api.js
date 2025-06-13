import axios from 'axios';

const api = axios.create({
  baseURL: 'https://your-job-api.com/api', // Replace with your actual API if needed
});

export default api;
