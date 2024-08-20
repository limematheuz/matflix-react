// MovieService.js
import axios from 'axios';

const API_URL = 'https://webapp-240820115338.azurewebsites.net/api';

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/PopularMovies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching popular movies:', error);
    throw error;
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await axios.get(`${API_URL}/UpcomingMovies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching upcoming movies:', error);
    throw error;
  }
};