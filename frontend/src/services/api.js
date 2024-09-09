import axios from "axios"

const api = axios.create({
    baseURL: 'https://api-server-gray.vercel.app/'
})

export default api