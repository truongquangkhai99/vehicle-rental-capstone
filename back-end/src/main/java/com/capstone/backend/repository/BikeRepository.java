package com.capstone.backend.repository;

import java.util.List;

import com.capstone.backend.model.Bike;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface BikeRepository extends JpaRepository<Bike,Long> {

	List<Bike> findByActived(boolean b);
    
}