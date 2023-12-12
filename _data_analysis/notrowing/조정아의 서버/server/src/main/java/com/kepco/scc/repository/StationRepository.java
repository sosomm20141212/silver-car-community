package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Station;

public interface StationRepository extends JpaRepository<Station,Integer>{
    
}
