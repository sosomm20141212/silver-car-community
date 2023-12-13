package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Posting;

public interface PostingRepository extends JpaRepository<Posting,Integer>{
    
}
