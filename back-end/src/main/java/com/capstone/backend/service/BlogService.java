package com.capstone.backend.service;

import com.capstone.backend.model.Blog;
import com.capstone.backend.payload.ResponseData;

public interface BlogService {
    ResponseData getAllBlogs();
    ResponseData getBlogById(long id);
    ResponseData saveBlog(Blog blog);
    void removeBlogById(long id);
}