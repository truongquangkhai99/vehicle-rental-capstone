import axios from 'axios';

class vehicleApi{
    createCar(car){
        return axios.post(process.env.REACT_APP_API_URL+'/register/car',car);
    }
    createBike(bike){
        return axios.post(process.env.REACT_APP_API_URL+'/register/bike',bike);
    }
    getMyVehicles(userId){
        return axios.get(process.env.REACT_APP_API_URL+'/MyVehicles',userId);
    }
    getVehicle(id){
        return axios.get(process.env.REACT_APP_API_URL+'/Vehicle',id);
    }
    getCarDriver(){
        return axios.get(process.env.REACT_APP_API_URL+'/CarsDriver');
    }
    getCarSelfDriver(){
        return axios.get(process.env.REACT_APP_API_URL+'/CarSelfDriver');
    }
    getBikes(){
        return axios.get(process.env.REACT_APP_API_URL+'/Bikes');
    }
}
export default new vehicleApi();