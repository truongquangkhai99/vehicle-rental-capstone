
import axiosClient from "./axiosClient";

const blogApi = {
    getBlog : function(){
        const url = '/blogs';
        return axiosClient.get(url);
    },
    getBlogById : function(params){
        const url = '/blog';
        return axiosClient.get(url, { params });
    },
    createBlog : function(data){
        const url = '/blog';
        return axiosClient.post(url, data);
    },
}
export default blogApi;