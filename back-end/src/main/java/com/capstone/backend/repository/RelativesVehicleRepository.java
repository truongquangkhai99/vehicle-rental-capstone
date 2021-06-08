package com.capstone.backend.repository;

import com.capstone.backend.model.RelativesVehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RelativesVehicleRepository extends JpaRepository<RelativesVehicle,Long>{

	RelativesVehicle findByLicensePlate(String string);
    
}