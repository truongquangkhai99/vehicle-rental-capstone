package com.capstone.backend.repository;

import java.util.List;

import com.capstone.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User,Long>{

	User findByUsername(String username);

	User findByEmail(String username);

	List<User> findByRelativesVehicles_LicensePlate(String string);
    
}