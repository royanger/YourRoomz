import axios from 'axios'

export const axiosConfig = axios.create({
  withCredentials: true,
  baseURL: 'http://localhost:5000',
  timeout: 1000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosConfig
