import axiosClient from "./axiosClient";

const aidApi = {
    findAid : function(params){
        const url = '/findAid';
        return axiosClient.get(url, { params });
    },
    addAid : function(params){
        const url = '/addAid';
        return axiosClient.get(url, { params });
    },
}
export default aidApi;