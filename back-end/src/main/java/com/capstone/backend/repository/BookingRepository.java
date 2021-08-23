package com.capstone.backend.repository;

import java.util.List;

import com.capstone.backend.model.Booking;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookingRepository extends JpaRepository<Booking,Long>{

	List<Booking> findByVehicleUserId(long userId);

	List<Booking> findByUserId(long userId);

	List<Booking> findByVehicleUserIdOrUserId(long userId,long id);
    
}