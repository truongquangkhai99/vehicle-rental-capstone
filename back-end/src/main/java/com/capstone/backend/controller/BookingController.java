package com.capstone.backend.controller;

import java.util.List;

import com.capstone.backend.model.Booking;
import com.capstone.backend.repository.BookingRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class BookingController {
    @Autowired
    BookingRepository b;

    @GetMapping("/book")
    public List<Booking> getBlog() {
        return b.findAll();
    }
}