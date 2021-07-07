package com.capstone.backend.repository;

import java.util.List;
import java.util.Optional;

import com.capstone.backend.model.Location;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LocationRepository extends JpaRepository<Location,Long>{

	Optional<Location> findByIdAndUserId(long id, long userId);

	List<Location> findAllByUserId(long id);
    
}