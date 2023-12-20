import axios from 'axios'

const bookApi = axios.create({
    baseURL:import.meta.env.VITE_APP_BOOK_BASE_URL
})
const authApi = axios.create({
    baseURL:import.meta.env.VITE_APP_AUTH_BASE_URL
})

export {bookApi,authApi};