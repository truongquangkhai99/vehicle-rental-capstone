package com.capstone.backend.controller;

import java.util.List;
import java.util.Set;

import javax.servlet.http.HttpServletRequest;

import com.capstone.backend.jwt.JwtAuthenticationFilter;
import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Car;
import com.capstone.backend.model.Vehicle;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.service.VehicleService;
import com.capstone.backend.service.VehicleServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
    VehicleServiceImpl vehicleService;
    @Autowired
    JwtAuthenticationFilter jwtAuth;

    @PostMapping("/register/car") // đăng ký oto
    public ResponseData saveVehicle(@RequestBody Car car) {
        return vehicleService.saveCar(car);
    }

    @PostMapping("/register/bike") // đăng ký xe máy
    public ResponseData saveVehicle(@RequestBody Bike bike) {
        return vehicleService.saveBike(bike);
    }

    @GetMapping("/MyVehicles") // danh sách xe của mình
    public ResponseData getMyVehicle(HttpServletRequest request) {
        return vehicleService.getAllVehiclesByUserId(jwtAuth.getUserIdFromRequest(request));
    }

    @GetMapping("/Vehicle") // Xem thông tin xe bất kì
    public ResponseData getMyVehicle(@RequestParam long id) {
        return vehicleService.getVehicleById(id);
    }

    @GetMapping("/CarsDriver") // Tìm xe có tài xế theo địa chỉ
    public List<Car> findCarDriver() {
        return vehicleService.findCarDriver();
    }

    @GetMapping("/CarSelfDriver") // Tìm xe có tự lái theo địa chỉ
    public List<Car> findCarSelfDriver() {
        return vehicleService.findCarSelfDriver();
    }

    @GetMapping("/Bikes") // Tìm xe máy theo địa chỉ
    public List<Bike> findBike() {
        return vehicleService.findBike();
    }

}