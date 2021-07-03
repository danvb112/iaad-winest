import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:7436'
})

export default api;