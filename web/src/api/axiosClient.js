import axios from 'axios';
import queryString from 'query-string';
import Cookie from 'universal-cookie';


export const getToken = () => {
    const cookie = new Cookie();
    const token = cookie.get('token');
    if (!token) {
        return null;
    }
    return token.accessToken;
}
const axiosClient = axios.create({
    baseURL: "http://localhost:8080/api",
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
    if (response && 'data' in response) {
        return response.data
    }
    return response;
}, (error) => {
    //handle errors
    throw error;
})

export default axiosClient;