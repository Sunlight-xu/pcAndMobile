import axios from 'axios'
let server = axios.create({
    baseURL: '',
    timeout: 8000
})
server.interceptors.request.use((config) => {
    return config
})
server.interceptors.response.use((res) => {
    if(res.status ===200) {
        return res
    } else {
       return Promise.reject(res)
    }
}, error => {
    console.log(error)
})
export default server