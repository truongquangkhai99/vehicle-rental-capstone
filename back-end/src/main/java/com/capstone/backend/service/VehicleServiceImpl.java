package com.capstone.backend.service;

import java.util.ArrayList;
import java.util.List;

import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Car;
import com.capstone.backend.model.Vehicle;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.BikeRepository;
import com.capstone.backend.repository.CarRepository;
import com.capstone.backend.repository.VehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired 
    private CarRepository carRepository;

    @ Autowired
    private BikeRepository bikeRepository;

   
    @Override
    public ResponseData getAllVehiclesByUserId(long id) {
        List<Vehicle> listVehicle =new ArrayList<>();
        for (Vehicle vehicle : vehicleRepository.findAllByUserId(id)) {
            if(vehicle.getUser().getId()==id){
                listVehicle.add(vehicle);
            }
        }
        return new ResponseData("get all my vehicle", listVehicle);
    }

    @Override
    public ResponseData saveCar(Car car) {   
        return new ResponseData("create car", vehicleRepository.save(car));
    }

    @Override
    public ResponseData saveBike(Bike bike) {
        return new ResponseData("creat bike", vehicleRepository.save(bike));
    }

    @Override
    public ResponseData getVehicleById(long id) {
        return new ResponseData("get vehicle", vehicleRepository.findById(id).get());
    }
    @Override
    public ResponseData findCarDriver() { 
        List<Car> lCars=new ArrayList<>();
        if(carRepository.findAll()!=null){
            for (Car car : carRepository.findAll()) {
                if(car.isDriver()){
                    lCars.add(car);
                }
            }  
            return new ResponseData("ok", lCars);
        }else{
            return new ResponseData("list car null", lCars);
        }
       
    }

    @Override
    public ResponseData findCarSelfDriver() {
        List<Car> lCars=new ArrayList<>();
        if(carRepository.findAll()!=null){
            for (Car car : carRepository.findAll()) {
                if(car.isDriver()==false){
                    lCars.add(car);
                }
            }  
            return new ResponseData("ok", lCars);
        }else{
            return new ResponseData("list car null", lCars);
        }
       
    }

    @Override
    public ResponseData findBike() {
       try{
            return new ResponseData("ok", bikeRepository.findAll());
       }catch(Exception ex){
            return new ResponseData("error", null);
       }
       
    }
}