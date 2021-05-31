import axiosClient from "./axiosClient";

const userApi = {
    login : function(data){
        const url = '/login';
        return axiosClient.post(url, data);
    }
}
export default userApi;