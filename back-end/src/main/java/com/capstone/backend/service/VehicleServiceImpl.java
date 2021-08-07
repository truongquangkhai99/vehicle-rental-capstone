package com.capstone.backend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

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
public class VehicleServiceImpl {
    @Autowired
    private VehicleRepository vehicleRepository;

    @Autowired
    private CarRepository carRepository;

    @Autowired
    private BikeRepository bikeRepository;

    public ResponseData getAllVehiclesByUserId(long id) {
        List<Vehicle> listVehicle = new ArrayList<>();
        for (Vehicle vehicle : vehicleRepository.findAllByUserId(id)) {
            if (vehicle.getUser().getId() == id) {
                listVehicle.add(vehicle);
            }
        }
        return new ResponseData("get all my vehicle", listVehicle);
    }

    public ResponseData saveCar(Car car) {
        return new ResponseData("create car", vehicleRepository.save(car));
    }

    public ResponseData saveBike(Bike bike) {
        return new ResponseData("creat bike", vehicleRepository.save(bike));
    }

    public ResponseData getVehicleById(long id) {
        return new ResponseData("get vehicle", vehicleRepository.findById(id).get());
    }

    public List<Car> findCarDriver() {
        return carRepository.findByDriver(true);
    }

    public List<Car> findCarSelfDriver() {
        return carRepository.findByDriver(false);
    }

    public List<Bike> findBike() {
        return bikeRepository.findAll();
    }
}