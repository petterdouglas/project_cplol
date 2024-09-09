import axios from "axios"

const api = axios.create({
    baseURL: 'https://api-server-ruby.vercel.app'
})

export default api