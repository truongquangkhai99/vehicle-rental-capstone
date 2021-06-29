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
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;  


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class BlogController {
    @Autowired
    BlogService blogService;

    @Autowired
    BlogRepository blogRepository;

    @GetMapping("/blog")
    public List<Blog> getBlog(){
        return blogRepository.findAll();
    }
    @GetMapping("/blog/{id}")
    public ResponseData getBlogById(@PathVariable long id){
        return blogService.getBlogById(id);
    }
    @PostMapping("/blog") 
    public ResponseData saveBlog(@RequestBody Blog blog){
        return blogService.saveBlog(blog);
    }
}