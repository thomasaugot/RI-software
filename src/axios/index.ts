
import axios from 'axios'


const BASE_URL = 'http://localhost:5000/';

export const baseUrl = axios.create({
    baseURL: BASE_URL,
})

baseUrl.defaults.headers.common['Content-Type'] = 'application/json';


