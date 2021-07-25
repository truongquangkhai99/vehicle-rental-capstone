import axiosClient from "./axiosClient";

const userApi = {
    login: function (data) {
        const url = '/login';
        return axiosClient.post(url, data);
    },
    getInfo: function () {
        const url = '/getInfo';
        return axiosClient.get(url);
    },
    changePassword: function (params) {
        const url = '/changePassword';
        return axiosClient.get(url, { params });
    },
    signup: function (data) {
        const url = '/signup';
        return axiosClient.post(url, data);
    },
    sendVerify: function () {
        const url = '/sendVerify';
        return axiosClient.get(url);
    },
    verify: function (params) {
        const url = '/verify';
        return axiosClient.get(url, { params });
    }
}
export default userApi;