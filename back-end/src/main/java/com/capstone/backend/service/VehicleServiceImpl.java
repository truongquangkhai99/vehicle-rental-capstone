package com.capstone.backend.service;

import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Car;
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
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData saveBike(Bike bike) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData getVehicleById(long id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData findCarDriver(String location) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData findCarSelfDriver(String location) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData findBike(String location) {
        // TODO Auto-generated method stub
        return null;
    }
    
}