// utils/axios.js

import { CMS_TOKEN } from '@/config';
import axios from 'axios';

// Create an Axios instance
const axiosInstance = axios.create({
  baseURL: 'https://cms.jmassociates.co.ke/api', // Base URL for your API
});

// Set up the request interceptor to include the token
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token (e.g., from localStorage or cookies)

      config.headers['api-key'] = CMS_TOKEN;
      config.headers['Content-Type'] = 'application/json';
      config.headers['Accept'] = 'application/json';
      
    
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
