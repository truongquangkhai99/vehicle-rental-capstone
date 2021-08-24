package com.capstone.backend.repository;

import com.capstone.backend.model.AidVehicle;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AidVehicleRepository extends JpaRepository<AidVehicle, Long> {

	AidVehicle findByNameAndAidUserName(String userName, String aidName);

	AidVehicle findByLicensePlate(String licensePlate);

}