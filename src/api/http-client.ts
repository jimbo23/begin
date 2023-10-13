import axios from 'axios';

export const httpClient = axios.create({
  baseURL: 'https://dummyjson.com/',
});

httpClient.interceptors.response.use((config) => {
  return config.data;
});
