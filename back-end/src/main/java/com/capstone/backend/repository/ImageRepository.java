package com.capstone.backend.repository;

import com.capstone.backend.model.Image;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface ImageRepository extends JpaRepository<Image,Long> {
    
}