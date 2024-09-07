import axios from 'axios'

const axiosAdapter = axios.create({
  baseURL: import.meta.env.VITE_REACT_COINGECKO_ENDPOINT,
  timeout: 10000
})

export default axiosAdapter
