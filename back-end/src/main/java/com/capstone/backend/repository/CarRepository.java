package com.capstone.backend.repository;

import com.capstone.backend.model.Car;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface CarRepository extends JpaRepository<Car, Long> {
    
}