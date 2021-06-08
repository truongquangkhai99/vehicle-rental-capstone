package com.capstone.backend.repository;

import com.capstone.backend.model.PaymentMethod;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentMethodRepository extends JpaRepository<PaymentMethod,Long> {
    
}