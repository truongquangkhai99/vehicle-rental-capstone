package com.capstone.backend.repository;

import java.util.List;
import java.util.Optional;

import com.capstone.backend.model.User;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface UserRepository extends JpaRepository<User,Long>{

	Optional<User> findByEmail(String username);

	List<User> findByRelativesVehicles_LicensePlate(String string);

	User findByMyVehiclesId(long id);
    
}