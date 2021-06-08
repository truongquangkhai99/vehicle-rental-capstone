package com.capstone.backend.service;

import java.util.List;

import com.capstone.backend.model.Blog;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.BlogRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogRepository blogRepository;

    
    @Override
    public ResponseData getAllBlogs() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData getBlogById() {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData saveBlog(Blog blog) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData removeBlogById(long id) {
        // TODO Auto-generated method stub
        return null;
    }

}