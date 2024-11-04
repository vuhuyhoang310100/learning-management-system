import axios from 'axios';
import Cookies from 'js-cookie';

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8000/api/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

axiosClient.interceptors.request.use(
    async (config) => {
        // console.log(config);
        const token = Cookies.get('token');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);
export default axiosClient;
