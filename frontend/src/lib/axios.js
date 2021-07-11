import axios from 'axios'

export const axiosConfig = axios.create({
  //   withCredentials: true,
  baseURL: process.env.REACT_APP_API_URI,
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default axiosConfig
