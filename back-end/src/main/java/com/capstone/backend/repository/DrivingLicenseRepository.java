package com.capstone.backend.repository;

import com.capstone.backend.model.DrivingLicense;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DrivingLicenseRepository extends JpaRepository<DrivingLicense, Long> {
    
}