// import axios from 'axios';

// class vehicleApi{
//     createCar(car){
//         return axios.post(process.env.REACT_APP_API_URL+'/register/car',car);
//     }
//     createBike(bike){
//         return axios.post(process.env.REACT_APP_API_URL+'/register/bike',bike);
//     }
//     getMyVehicles(userId){
//         return axios.get(process.env.REACT_APP_API_URL+'/MyVehicles',userId);
//     }
//     getVehicle(id){
//         return axios.get(process.env.REACT_APP_API_URL+'/Vehicle',id);
//     }
//     getCarDriver(){
//         return axios.get(process.env.REACT_APP_API_URL+'/CarsDriver');
//     }
//     getCarSelfDriver(){
//         return axios.get(process.env.REACT_APP_API_URL+'/CarSelfDriver');
//     }
//     getBikes(){
//         return axios.get(process.env.REACT_APP_API_URL+'/Bikes');
//     }
// }
// export default new vehicleApi();
import axiosClient from "./axiosClient";

const vehicleApi = {
    createCar: function (data) {
        const url = '/register/car';
        return axiosClient.post(url, data);
    },
    createBike: function (data) {
        const url = '/register/bike';
        return axiosClient.post(url,data);
    },
    getMyVehicles: function () {
        const url = '/MyVehicles';
        return axiosClient.get(url);
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
    checkLiked: function (params) {
        const url = '/checkLiked';
        return axiosClient.get(url, { params });
    },
    updateLike: function (params) {
        const url = '/updateLike';
        return axiosClient.get(url, { params });
    },
    getMyFavs: function (params) {
        const url = '/getMyFavs';
        return axiosClient.get(url, { params });
    },
    getBrands: function () {
        const url = '/getBrands';
        return axiosClient.get(url);
    },
    uploadMultipleFiles: function (data) {
        return axiosClient.post("/uploadMultipleFiles", data, {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    },
    

}
export default vehicleApi;