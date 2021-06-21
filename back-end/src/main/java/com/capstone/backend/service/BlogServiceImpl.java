package com.capstone.backend.service;
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
        return new ResponseData("get all blogs", blogRepository.findAll());
    }

    @Override
    public ResponseData getBlogById(long id) {
        // TODO Auto-generated method stub
        return new ResponseData("get blog", blogRepository.findById(id).get());
    }

    @Override
    public ResponseData saveBlog(Blog blog) {
        // TODO Auto-generated method stub
        return new ResponseData("save blog", blogRepository.save(blog));
    }

    @Override
    public ResponseData removeBlogById(long id) {
        // TODO Auto-generated method stub
        blogRepository.deleteById(id);
       return new ResponseData("delete blog has id="+ id ,blogRepository.findAll());
    }

}