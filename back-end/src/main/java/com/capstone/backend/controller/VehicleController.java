package com.capstone.backend.controller;

import java.util.List;

import javax.servlet.http.HttpServletRequest;

import com.capstone.backend.jwt.JwtAuthenticationFilter;
import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Brand;
import com.capstone.backend.model.Car;
import com.capstone.backend.model.Vehicle;
import com.capstone.backend.payload.ResponseData;
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
    public ResponseData saveVehicle(HttpServletRequest request, @RequestBody Car car) {
        long userId = jwtAuth.getUserIdFromRequest(request);
        return vehicleService.saveCar(car, userId);
    }

    @PostMapping("/register/bike") // đăng ký xe máy
    public ResponseData saveVehicle(HttpServletRequest request, @RequestBody Bike bike) {
        long userId = jwtAuth.getUserIdFromRequest(request);
        return vehicleService.saveBike(bike, userId);
    }

    @PostMapping("/update/car") // đăng ký oto
    public ResponseData updateVehicle(@RequestBody Car car) {
        return vehicleService.updateCar(car);
    }

    @PostMapping("/update/bike") // đăng ký xe máy
    public ResponseData updateVehicle(@RequestBody Bike bike) {
        return vehicleService.updateBike(bike);
    }

    @GetMapping("/MyVehicles") // danh sách xe của mình
    public ResponseEntity<?> getMyVehicle(HttpServletRequest request) {
        long userId = jwtAuth.getUserIdFromRequest(request);
        return new ResponseEntity<List<Vehicle>>(vehicleService.getAllVehiclesByUserId(userId), HttpStatus.OK);
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

    @GetMapping("/getMyFavs") // danh sách xe Yêu thích
    public List<Vehicle> getMyFavs(HttpServletRequest request) {
        return vehicleService.getMyFavs(jwtAuth.getUserIdFromRequest(request));
    }

    @GetMapping("/checkLiked")
    public ResponseEntity<?> checkLiked(@RequestParam long id, HttpServletRequest request) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            return new ResponseEntity<>(vehicleService.checkLiked(id, userId), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/updateLike")
    public ResponseEntity<?> updateLike(@RequestParam long id, @RequestParam boolean status,
            HttpServletRequest request) {
        try {
            long userId = jwtAuth.getUserIdFromRequest(request);
            vehicleService.updateLike(id, status, userId);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/getBrands")
    public ResponseEntity<?> getBrands() {
        try {
            return new ResponseEntity<List<Brand>>(vehicleService.getBrands(), HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
        }
    }
}