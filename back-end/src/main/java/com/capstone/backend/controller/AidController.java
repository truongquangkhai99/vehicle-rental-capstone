package com.capstone.backend.controller;

import java.util.List;

import com.capstone.backend.model.AidUser;
import com.capstone.backend.service.AidService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class AidController {
    @Autowired
    private AidService aidService;

    @GetMapping("/findAid")
    public ResponseEntity<?> getVehicleBookingRating(@RequestParam String licensePlate) {
        try {
            List<AidUser> r = aidService.findAid(licensePlate);
            return new ResponseEntity<List<AidUser>>(r, HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/addAid")
    public ResponseEntity<?> addAid(@RequestParam String licensePlate,
            @RequestParam String aidName, @RequestParam String aidPhone) {
        try {
            aidService.addAid(licensePlate, aidName, aidPhone);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}