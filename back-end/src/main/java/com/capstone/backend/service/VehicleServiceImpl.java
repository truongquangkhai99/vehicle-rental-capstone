package com.capstone.backend.service;

import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Car;
import com.capstone.backend.model.Vehicle;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.VehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class VehicleServiceImpl implements VehicleService {
    @Autowired
    private VehicleRepository vehicleRepository;

    @Override
    public ResponseData getAllVehiclesByUserId(long id) {
        // TODO Auto-generated method stub
        return new ResponseData("ok", vehicleRepository.findAllByUserId(id));
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
        return new ResponseData("get vehicle", vehicleRepository.findById(id));
    }

    @Override
    public ResponseData findCarDriver(String location) {   
        return new ResponseData("find car driver",vehicleRepository.findAllCarDriver(location) );
    }

    @Override
    public ResponseData findCarSelfDriver(String location) {
        // TODO Auto-generated method stub
        return new ResponseData("find car self driver",vehicleRepository.findAllCarSelfDriver(location));
    }

    @Override
    public ResponseData findBike(String location) {
        // TODO Auto-generated method stub
        return  new ResponseData("find car self driver",vehicleRepository.findAllBike(location));
    }
    
}