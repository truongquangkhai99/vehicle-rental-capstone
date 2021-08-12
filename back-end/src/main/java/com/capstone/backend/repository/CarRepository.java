package com.capstone.backend.repository;

import java.util.List;

import com.capstone.backend.model.Car;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CarRepository extends JpaRepository<Car, Long> {

	List<Car> findByDriver(boolean driver);

	List<Car> findByDriverAndActived(boolean b, boolean c);
    
}