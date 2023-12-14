package com.kepco.scc.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kepco.scc.model.Vehicle;
import java.util.List;


public interface VehicleRepository extends JpaRepository<Vehicle,String>{
    List<Vehicle> findByManufacturer(String manufacturer);
}
