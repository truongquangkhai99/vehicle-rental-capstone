import axiosClient from "./axiosClient";

const bikeApi = {
    getAll : function(params){
        const url = '/bikes';
        return axiosClient.get(url, { params });
    },
    getAddress : function(params){
        //override
        axiosClient.defaults.baseURL='https://online-gateway.ghn.vn/shiip/public-api';
        axiosClient.defaults.headers={'token':'84f35a23-6893-11eb-86b9-8a61086fe5fd'};
        const url = '/master-data/province';
        return axiosClient.get(url, { params });
    }
}
export default bikeApi;