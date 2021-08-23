package com.capstone.backend.repository;

import java.util.List;

import com.capstone.backend.model.Rating;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RatingRepository extends JpaRepository<Rating, Long>{

	Rating findByVehicleIdAndReviewerId(long id, long userId);

	Rating findByUserIdAndReviewerId(long id, long userId);

	List<Rating> findByUserId(Long id);
    
}