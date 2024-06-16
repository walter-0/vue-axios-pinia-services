import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/' /* placeholder api */,
  headers: {
    'Content-Type': 'application/json; charset=UTF-8'
  }
  // baseURL: import.meta.env.VITE_API_ENDPOINT /* use this for your own endpoints */
});
