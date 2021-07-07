package com.capstone.backend.controller;

import com.capstone.backend.model.Location;
import com.capstone.backend.model.User;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.DrivingLicenseRepository;
import com.capstone.backend.repository.LocationRepository;
import com.capstone.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @Autowired
    UserRepository userR;
    @Autowired
    DrivingLicenseRepository drivingLincenseR;
    @Autowired
    LocationRepository locationR;

    @GetMapping("/")
    public ResponseData test() {   
        Location l = new Location();
        l.setId(1L);
        User u = userR.findById(1L).get();
        l.setUser(u);
        locationR.save(l);
        return new ResponseData("Thành công", userR.findAll());
    }
}