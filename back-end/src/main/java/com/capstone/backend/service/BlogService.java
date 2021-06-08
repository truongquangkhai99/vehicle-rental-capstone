package com.capstone.backend.service;

import com.capstone.backend.model.Blog;
import com.capstone.backend.payload.ResponseData;

public interface BlogService {
    ResponseData getAllBlogs();
    ResponseData getBlogById();
    ResponseData saveBlog(Blog blog);
    ResponseData removeBlogById(long id);
}