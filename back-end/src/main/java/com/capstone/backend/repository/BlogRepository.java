package com.capstone.backend.repository;

import com.capstone.backend.model.Blog;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BlogRepository extends JpaRepository<Blog,Long>{
    
}