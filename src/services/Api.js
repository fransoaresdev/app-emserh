import axios from 'axios'; 

const api = axios.create({
    baseURL: 'https://gpc.emserh.ma.gov.br/api',
});

export default api;