import axios from 'axios'

const api = axios.create({
    baseURL: 'https://winest-api.herokuapp.com'
})

export default api;