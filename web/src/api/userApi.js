import axiosClient, { getToken } from "./axiosClient";

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
    },
    updatePhone: function (params) {
        const url = '/updatePhone';
        return axiosClient.get(url, { params });
    },
    updateUser: function (data) {
        const url = '/updateUser';
        return axiosClient.post(url, data);
    },
    updateDrivingLicense: function (data) {
        const url = '/updateDrivingLicense';
        return axiosClient.post(url, data);
    },
    changeEmail: function (params) {
        const url = '/changeEmail';
        return axiosClient.get(url, { params });
    },
    getPromotions: function () {
        const url = '/promotions';
        return axiosClient.get(url);
    },
    updateGPLX: function (data) {
        let formData = new FormData();
        formData.append("file", data);
        return axiosClient.post("/updateGPLX", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    },
    updateAvatar: function (data) {
        let formData = new FormData();
        formData.append("file", data);
        return axiosClient.post("/updateAvatar", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    },
    forgetPassword: (params) => {
        const url = '/forgetPassword';
        return axiosClient.get(url, { params });
    },
    forgetChangePassword: (data) => {
        const url = '/forgetChangePassword';
        return axiosClient.post(url, data);
    },
}
export default userApi;