package com.capstone.backend.service;

import java.util.List;

import com.capstone.backend.model.Bike;
import com.capstone.backend.model.Brand;
import com.capstone.backend.model.Car;
import com.capstone.backend.model.Image;
import com.capstone.backend.model.Location;
import com.capstone.backend.model.Model;
import com.capstone.backend.model.User;
import com.capstone.backend.model.Vehicle;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.BikeRepository;
import com.capstone.backend.repository.BrandRepository;
import com.capstone.backend.repository.CarRepository;
import com.capstone.backend.repository.LocationRepository;
import com.capstone.backend.repository.ModelRepository;
import com.capstone.backend.repository.UserRepository;
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
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BrandRepository brandRepository;
    @Autowired
    private ModelRepository modelRepository;
    @Autowired
    private LocationRepository locationRepository;

    public List<Vehicle> getAllVehiclesByUserId(long id) {
        return vehicleRepository.findAllByUserId(id);
    }

    public ResponseData saveCar(Car car, long userId) {
        User u = userRepository.findById(userId).get();
        car.setUser(u);
        Model m = modelRepository.findById(car.getModel().getId()).get();
        car.setModel(m);
        Location l = car.getLocation();
        l.setUser(u);
        l = locationRepository.save(l);
        car.setLocation(l);
        List<Image> li = car.getImages();
        car.setImages(null);
        car = carRepository.save(car);
        for (Image i : li) {
            i.setLink("http://localhost:8080/api/images/vehicle" + car.getId() + "-" + i.getId());
            i.setVehicle(car);
            i.setId(0l);
            if (i.isMainImg()) {
                car.setMainImg(i.getLink());
            }
        }
        car.setImages(li);
        return new ResponseData("creat car", carRepository.save(car));
    }

    public ResponseData saveBike(Bike bike, long userId) {
        User u = userRepository.findById(userId).get();
        bike.setUser(u);
        Model m = modelRepository.findById(bike.getModel().getId()).get();
        bike.setModel(m);
        Location l = bike.getLocation();
        l.setUser(u);
        l = locationRepository.save(l);
        bike.setLocation(l);
        List<Image> li = bike.getImages();
        bike.setImages(null);
        bike = bikeRepository.save(bike);
        for (Image i : li) {
            i.setLink("http://localhost:8080/api/images/vehicle" + bike.getId() + "-" + i.getId());
            i.setVehicle(bike);
            i.setId(0l);
            if (i.isMainImg()) {
                bike.setMainImg(i.getLink());
            }
        }
        bike.setImages(li);
        return new ResponseData("creat bike", bikeRepository.save(bike));
    }

    public ResponseData updateCar(Car car) {
        Location l = car.getLocation();
        locationRepository.save(l);
        return new ResponseData("creat car", carRepository.save(car));
    }

    public ResponseData updateBike(Bike bike) {
        Location l = bike.getLocation();
        locationRepository.save(l);
        return new ResponseData("creat bike", bikeRepository.save(bike));
    }

    public ResponseData getVehicleById(long id) {
        return new ResponseData("get vehicle", vehicleRepository.findById(id).get());
    }

    public List<Car> findCarDriver() {
        return carRepository.findByDriverAndActived(true, true);
    }

    public List<Car> findCarSelfDriver() {
        return carRepository.findByDriverAndActived(false, true);
    }

    public List<Bike> findBike() {
        return bikeRepository.findByActived(true);
    }

    public List<Vehicle> getMyFavs(Long userId) {
        return vehicleRepository.findByUserLikedId(userId);
    }

    public boolean checkLiked(long id, long userId) {
        return vehicleRepository.existsByIdAndUserLikedId(id, userId);
    }

    public void updateLike(long id, boolean status, long userId) {
        User u = userRepository.findById(userId).get();
        List<Vehicle> lv = u.getLikedVehicles();
        if (status) {
            Vehicle v = vehicleRepository.findById(id).get();
            lv.add(v);
        } else {
            lv.removeIf(vehicle -> vehicle.getId() == id);
        }
        u.setLikedVehicles(lv);
        userRepository.save(u);
    }

    public List<Brand> getBrands() {
        return brandRepository.findAll();
    }

    public ResponseData approachCar(long id) {
        Vehicle v = vehicleRepository.findById(id).get();
        v.setActived(!v.isActived());
        vehicleRepository.save(v);
        return new ResponseData("ok", null);
    }
}