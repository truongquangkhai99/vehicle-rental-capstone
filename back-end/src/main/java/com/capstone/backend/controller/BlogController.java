package com.capstone.backend.controller;

import com.capstone.backend.model.Blog;
import com.capstone.backend.payload.ResponseData;

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
    @GetMapping("/allBlogs")
    public ResponseData getAllBlogs(){
        return null;
    }
    @GetMapping("/blog")
    public ResponseData getBlogById(@RequestParam long id){
        return null;
    }
    @PostMapping("/saveBlog") 
    public ResponseData saveBlog(@RequestBody Blog blog){
        return null;
    }
}