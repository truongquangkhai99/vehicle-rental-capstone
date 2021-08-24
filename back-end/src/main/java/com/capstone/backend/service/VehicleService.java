package com.capstone.backend.service;

import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Car;
import com.capstone.backend.payload.ResponseData;

public interface VehicleService {
    ResponseData getAllVehiclesByUserId(long id);

    ResponseData saveCar(Car car);

    ResponseData saveBike(Bike bike);

    ResponseData getVehicleById(long id);

    ResponseData approachCar(long id);

    // Tìm xe dựa trên vị trí
    ResponseData findCarDriver();

    ResponseData findCarSelfDriver();

    ResponseData findBike();
}