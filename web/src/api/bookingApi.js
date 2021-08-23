import axiosClient from "./axiosClient";

const bookingApi = {
    checkPromotion: function (params) {
        const url = '/checkPromotion';
        return axiosClient.get(url, { params });
    },
    checkGPLX: function (params) {
        const url = '/checkGPLX';
        return axiosClient.get(url, { params });
    },
    createBooking: function (data) {
        const url = '/createBooking';
        return axiosClient.post(url, data);
    },
    getMyBooking: function () {
        const url = '/getMyBooking';
        return axiosClient.get(url);
    },
    getMyRequestBooking: function () {
        const url = '/getMyRequestBooking';
        return axiosClient.get(url);
    },
    getBooking: function (params) {
        const url = '/getBooking';
        return axiosClient.get(url, { params });
    },
    cancelBooking: function (params) {
        const url = '/cancelBooking';
        return axiosClient.get(url, { params });
    },
    rejectBooking: function (params) {
        const url = '/rejectBooking';
        return axiosClient.get(url, { params });
    },
    confirmBooking: function (params) {
        const url = '/confirmBooking';
        return axiosClient.get(url, { params });
    },
    deposit: function (params) {
        const url = '/deposit';
        return axiosClient.get(url, { params });
    },
    cancelAfterDeposit: function (params) {
        const url = '/cancelAfterDeposit';
        return axiosClient.get(url, { params });
    },
    getBackDeposit: function (params) {
        const url = '/getBackDeposit';
        return axiosClient.get(url, { params });
    },
    vehicleHanding: function (params) {
        const url = '/vehicleHanding';
        return axiosClient.get(url, { params });
    },
    receiveVehicle: function (params) {
        const url = '/receiveVehicle';
        return axiosClient.get(url, { params });
    },
    giveVehicleBack: function (params) {
        const url = '/giveVehicleBack';
        return axiosClient.get(url, { params });
    },
    receiveBackVehicle: function (params) {
        const url = '/receiveBackVehicle';
        return axiosClient.get(url, { params });
    },
    getUserBookingRating: function (params) {
        const url = '/getUserBookingRating';
        return axiosClient.get(url, { params });
    },
    getVehicleBookingRating: function (params) {
        const url = '/getVehicleBookingRating';
        return axiosClient.get(url, { params });
    },
    ratingVehicle: function (params) {
        const url = '/ratingVehicle';
        return axiosClient.get(url, { params });
    },
    ratingUser: function (params) {
        const url = '/ratingUser';
        return axiosClient.get(url, { params });
    },
    getAllUserRating: function (params) {
        const url = '/getAllUserRating';
        return axiosClient.get(url, { params });
    },
}
export default bookingApi;