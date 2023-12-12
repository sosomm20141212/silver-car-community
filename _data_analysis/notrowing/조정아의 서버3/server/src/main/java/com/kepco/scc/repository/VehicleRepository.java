package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Vehicle;

public interface VehicleRepository extends JpaRepository<Vehicle,String>{
    
}
