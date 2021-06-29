package com.capstone.backend.controller;

import javax.servlet.http.HttpServletRequest;

import com.capstone.backend.jwt.JwtAuthenticationFilter;
import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Car;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.VehicleRepository;
import com.capstone.backend.service.DistancesService;
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
    @ Autowired
    private DistancesService distances;
    @GetMapping("/distance")
    public ResponseData getdis(@RequestParam String source,@RequestParam String destination){
        try {
            //method of DistanceTime Class
          String response=distances.calculate(source,destination);        
      System.out.println(response);
      return new ResponseData("ok", response);
      }
      catch(Exception e) {
          System.out.println("Exception Occurred");
      }
      return new ResponseData("ok", null);
    }
    @PostMapping("/register/car")//đăng ký  oto
    public ResponseData saveVehicle(@RequestBody Car car){  
        return vehicleService.saveCar(car);
    }
    @PostMapping("/register/bike")//đăng ký xe máy
    public ResponseData saveVehicle(@RequestBody Bike bike){        
        return vehicleService.saveBike(bike);
    }
    @GetMapping("/MyVehicles")// danh sách xe của mình
    public ResponseData getMyVehicle(HttpServletRequest request){  
        return vehicleService.getAllVehiclesByUserId(jwtAuth.getUserIdFromRequest(request));
    }
    @GetMapping("/Vehicle")// Xem thông tin xe bất kì
    public ResponseData getMyVehicle(@RequestParam long id){
        return  vehicleService.getVehicleById(id);
    }
    @GetMapping("/CarsDriver")//Tìm xe có tài xế theo địa chỉ
    public ResponseData findCarDriver(){
        return  vehicleService.findCarDriver();
    }
    @GetMapping("/CarSelfDriver")//Tìm xe có tự lái theo địa chỉ
    public ResponseData findCarSelfDriver(){
        return  vehicleService.findCarSelfDriver();
    }
    @GetMapping("/Bikes")//Tìm xe máy theo địa chỉ
    public ResponseData findBike(){
        return  vehicleService.findBike();
    }

}