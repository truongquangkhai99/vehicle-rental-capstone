package com.capstone.backend.service;

import java.util.List;

import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Car;
import com.capstone.backend.model.Vehicle;
import com.capstone.backend.repository.VehicleRepository;
import com.capstone.backend.repository.BikeRepository;
import com.capstone.backend.repository.CarRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleService {
    @Autowired
    VehicleRepository vehicleRepository;
    @Autowired
    CarRepository carRepository;
    @Autowired
    BikeRepository bikeRepository;
    

	public List<Vehicle> getAllVehicle() {
		return vehicleRepository.findAll();
	}
	public List<Bike> getAllBike() {
		return bikeRepository.findAll();
	}
	public List<Car> getAllCar() {
		return carRepository.findAll();
	}
}