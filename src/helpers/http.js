import axios from 'axios';

export default function http() {
  const headers = {};
  const token = localStorage.getItem('access-token');
  if (token)
    headers.Authorization = token;

  return axios.create({
    baseURL: 'http://localhost',
    // baseURL: 'http://143.244.166.83',
    headers,
    // withCredentials: true,
  });
};
