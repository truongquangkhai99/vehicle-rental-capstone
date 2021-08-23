package com.capstone.backend.repository;

import java.util.List;

import com.capstone.backend.model.Vehicle;
import com.capstone.backend.payload.ResponseData;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
@Repository
public interface VehicleRepository extends JpaRepository<Vehicle,Long>{

	List<Vehicle> findAllByUserId(long id);

	
	List<Vehicle> findByUserLikedId(Long userId);

	boolean existsByIdAndUserLikedId(long id, long userId);
    
}