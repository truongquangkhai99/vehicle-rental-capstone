package com.capstone.backend.controller;

import javax.servlet.http.HttpServletRequest;

import com.capstone.backend.jwt.JwtAuthenticationFilter;
import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Car;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.service.VehicleService;

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
public class VehicleController {
    @Autowired
    VehicleService vehicleService;
    @Autowired
    JwtAuthenticationFilter jwtAuth;

    @PostMapping("/register/car")//đăng ký  oto
    public ResponseData saveVehicle(@RequestBody Car car){        
        return new ResponseData("error", null);
    }
    @PostMapping("/register/bike")//đăng ký xe máy
    public ResponseData saveVehicle(@RequestBody Bike bike){        
        return new ResponseData("error", null);
    }
    @GetMapping("/getMyVehicles")// danh sách xe của mình
    public ResponseData getMyVehicle(HttpServletRequest request){
        return new ResponseData("error", null);
    }
    @GetMapping("/getVehicle")// Xem thông tin xe bất kì
    public ResponseData getMyVehicle(long id){
        return new ResponseData("error", null);
    }
    @GetMapping("/findCarDriver")//Tìm xe có tài xế theo địa chỉ
    public ResponseData findCarDriver(@RequestParam String address){
        return new ResponseData("error", null);
    }
    @GetMapping("/findCarSelfDriver")//Tìm xe có tự lái theo địa chỉ
    public ResponseData findCarSelfDriver(@RequestParam String address){
        return new ResponseData("error", null);
    }
    @GetMapping("/findBike")//Tìm xe máy theo địa chỉ
    public ResponseData findBike(@RequestParam String address){
        return new ResponseData("error", null);
    }

}