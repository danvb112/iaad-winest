import axios from 'axios'

const api = axios.create({
    baseURL: 'https://localhost:7436'
})

export default api;