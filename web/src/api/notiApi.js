import axiosClient from "./axiosClient";

const notiApi = {
    getAllNoti: function (params) {
        const url = '/getNoti';
        return axiosClient.get(url);
    },
    readNoti: function (params) {
        const url = '/readNoti';
        return axiosClient.get(url, { params });
    },
    createBooking: function (data) {
        const url = '/createBooking';
        return axiosClient.post(url, data);
    },
}
export default notiApi;