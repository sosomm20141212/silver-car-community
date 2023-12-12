package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Review;

public interface ReviewRepository extends JpaRepository<Review,Integer>{
    
}
