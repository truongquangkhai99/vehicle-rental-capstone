import axiosClient from "./axiosClient";

const vehicleApi = {
    createCar: function (data) {
        const url = '/register/car';
        return axiosClient.post(url, data);
    },
    createBike: function () {
        const url = '/register/bike';
        return axiosClient.post(url);
    },
    getMyVehicles: function (data) {
        const url = '/MyVehicles';
        return axiosClient.post(url, data);
    },
    getVehicle: function (params) {
        const url = '/Vehicle';
        return axiosClient.get(url, { params });
    },
    getCarDriver: function () {
        const url = '/CarsDriver';
        return axiosClient.get(url);
    },
    getCarSelfDriver: function (params) {
        const url = '/CarSelfDriver';
        return axiosClient.get(url, { params });
    },
    getBikes: function (params) {
        const url = '/Bikes';
        return axiosClient.get(url, { params });
    },
}
export default vehicleApi;