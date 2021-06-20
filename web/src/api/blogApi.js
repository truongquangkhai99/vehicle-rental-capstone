import axios from 'axios';

const BLOG_API_BASE_URL = "http://localhost:8080/api/blog";

class blogApi {
    getBlog(){
        return axios.get(BLOG_API_BASE_URL);
    }

    getBlogById(blogId){
        return axios.get(BLOG_API_BASE_URL+'/'+blogId);
    }

    createBlog(blog){
        return axios.post(BLOG_API_BASE_URL,blog);
    }
}
export default new blogApi();