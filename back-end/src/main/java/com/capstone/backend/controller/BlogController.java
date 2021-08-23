package com.capstone.backend.controller;

import java.util.List;

import com.capstone.backend.model.Blog;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.BlogRepository;
import com.capstone.backend.service.BlogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin
@RestController
@RequestMapping("/api")
public class BlogController {
    @Autowired
    BlogService blogService;

    @Autowired
    BlogRepository blogRepository;

    @GetMapping("/blogs")
    public List<Blog> getBlog(){
        return blogRepository.findAll();
    }
    @GetMapping("/blog")
    public ResponseData getBlogById(@RequestParam long id){
        return blogService.getBlogById(id);
    }
    @PostMapping("/blog") 
    public ResponseData saveBlog(@RequestBody Blog blog){
        return blogService.saveBlog(blog);
    }
}