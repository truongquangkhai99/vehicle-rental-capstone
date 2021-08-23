package com.capstone.backend.repository;

import com.capstone.backend.model.ResponseRate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ResponseRateRepository extends JpaRepository<ResponseRate, Long> {


    
}