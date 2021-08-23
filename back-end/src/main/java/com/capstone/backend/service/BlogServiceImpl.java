package com.capstone.backend.service;

import com.capstone.backend.model.Blog;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.BlogRepository;
// import com.capstone.backend.repository.VehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class BlogServiceImpl implements BlogService {

    @Autowired
    private BlogRepository blogRepository;

    @Override
    public ResponseData getAllBlogs() {
        try {
            return new ResponseData("ok", blogRepository.findAll());
        } catch (Exception ex) {
            return new ResponseData("error", null);
        }

    }

    @Override
    public ResponseData getBlogById(long id) {
        if (id > 0) {
            return new ResponseData("ok", blogRepository.findById(id).get());
        } else {
            return new ResponseData("id ko hop le", null);
        }

    }

    @Override
    public ResponseData saveBlog(Blog blog) {
        if (blog != null) {
            return new ResponseData("ok", blogRepository.save(blog));
        } else {
            return new ResponseData("blog null", null);
        }

    }

    @Override
    public ResponseData removeBlogById(long id) {
        if (blogRepository.findById(id) != null) {
            blogRepository.deleteById(id);
            return new ResponseData("ok" + id, blogRepository.findAll());
        } else {
            return new ResponseData("id ko ton tai", blogRepository.findAll());
        }

    }

}