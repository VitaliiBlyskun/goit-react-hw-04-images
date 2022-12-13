import axios from 'axios';

const API_KEY = '30520584-c0fa81cb9ba3feeaa4712e503';
axios.defaults.baseURL = 'https://pixabay.com/api';



const searchParams = new URLSearchParams({
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});


export const getImages = async (query, page) => {
  const response = await axios.get(`/?q=${query}&page=${page}&${searchParams}`);
  return response.data;
};