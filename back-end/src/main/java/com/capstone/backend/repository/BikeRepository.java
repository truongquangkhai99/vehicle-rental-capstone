package com.capstone.backend.repository;

import com.capstone.backend.model.Bike;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BikeRepository extends JpaRepository<Bike,Long> {
    
}