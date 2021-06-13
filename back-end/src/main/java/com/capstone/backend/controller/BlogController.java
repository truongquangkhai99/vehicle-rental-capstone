package com.capstone.backend.controller;

import com.capstone.backend.model.Blog;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.service.BlogService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class BlogController {
    @Autowired
    BlogService blogService;

    @GetMapping("/allBlogs")
    public ResponseData getAllBlogs(){
        return new ResponseData("all blog",blogService.getAllBlogs() );
    }
    @GetMapping("/blog")
    public ResponseData getBlogById(@RequestParam long id){
        return new ResponseData("all blog",blogService.getBlogById(id));
    }
    @PostMapping("/saveBlog") 
    public ResponseData saveBlog(@RequestBody Blog blog){
        return new ResponseData("all blog",blogService.saveBlog(blog));
    }
}