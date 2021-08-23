package com.capstone.backend.repository;

import java.util.List;

import com.capstone.backend.model.AidUser;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AidUserRepository extends JpaRepository<AidUser,Long> {

	List<AidUser> findByAidVehicleLicensePlate(String licensePlate);

	AidUser findByNameAndPhone(String aidName, String aidPhone);
    
}