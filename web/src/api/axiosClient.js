import axios from 'axios';
import queryString from 'query-string';
import Cookie from 'universal-cookie';


export const getToken = () => {
    const cookie = new Cookie();
    const token = cookie.get('token');
    if (!token) {
        return null;
    }
    return token;
}
const axiosClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    // @ts-ignore
    header: {
        'content-type': 'application/json',
    },
    paramsSerializer: params => queryString.stringify(params),
})

axiosClient.interceptors.request.use(async (config) => {
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
})

axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
        return response.data
    }
    return response;
}, (error) => {
    //handle errors
    throw error;
})

export default axiosClient;