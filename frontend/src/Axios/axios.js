import axios from "axios"
const instance = axios.create({
    baseURL:"https://todo-app-1-ko3s.onrender.com/api"
})
export default instance
