package com.capstone.backend.controller;

import com.capstone.backend.service.BlogService;
import com.capstone.backend.service.UserService;
import com.capstone.backend.service.VehicleService;

import java.util.List;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.BlogRepository;
import com.capstone.backend.repository.BookingRepository;
import com.capstone.backend.repository.UserRepository;
import com.capstone.backend.repository.VehicleRepository;
import com.capstone.backend.model.Blog;
import com.capstone.backend.model.Booking;
import com.capstone.backend.model.User;
import com.capstone.backend.model.Vehicle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    BlogService blogService;

    @Autowired
    BlogRepository blogRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    UserService userService;

    @Autowired
    VehicleRepository vehicleRepository;

    @Autowired
    VehicleService vehicleService;

    @Autowired
    BookingRepository bookingRepository;

    @GetMapping("/blogs")
    public List<Blog> getBlog() {
        return blogRepository.findAll();
    }

    @GetMapping("/blog/{id}")
    public ResponseData getBlogById(@PathVariable long id) {
        return blogService.getBlogById(id);
    }

    @PostMapping("/blog")
    public ResponseData saveBlog(@RequestBody Blog blog) {
        return blogService.saveBlog(blog);
    }

    @PutMapping("/blog")
    public ResponseData updateBlog(@RequestBody Blog blog) {
        return blogService.saveBlog(blog);
    }

    @DeleteMapping("/blog")
    public ResponseData deleteBlogById(@RequestParam long id) {
        return blogService.removeBlogById(id);
    }

    @GetMapping("/users")
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    @PutMapping("/user")
    public ResponseData updateUser(@RequestParam long id) {
        return userService.banUser(id);
    }

    @GetMapping("/vehicles")
    public List<Vehicle> getVehicles() {
        return vehicleRepository.findAll();
    }

    @PutMapping("/vehicle")
    public ResponseData updateVehicle(@RequestParam long id) {
        return vehicleService.approachCar(id);
    }

    @GetMapping("/transactions")
    public List<Booking> getTransaction() {
        return bookingRepository.findAll();
    }
}