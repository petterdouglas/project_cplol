import axios from "axios"

const api = axios.create({
    baseURL: 'https://project-cplol-api.vercel.app'
})

export default api