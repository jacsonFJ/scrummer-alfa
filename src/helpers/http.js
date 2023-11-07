import axios from 'axios';

export default function http() {
  const headers = {};
  const token = localStorage.getItem('access-token');
  if (token)
    headers.Authorization = `Bearer ${token}`;

  return axios.create({
    // baseURL: 'http://localhost',
    baseURL: 'https://jacsonfj.com.br',
    headers,
    // withCredentials: true,
  });
};
