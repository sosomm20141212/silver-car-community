package com.kepco.scc.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RestController;

import com.kepco.scc.model.Vehicle;
import com.kepco.scc.repository.VehicleRepository;

import java.util.List;
import java.util.Optional;
@RestController
public class vehicleController {
    @Autowired
    VehicleRepository vehicleRepository;
    
    @GetMapping("/vehicle")
    public List<Vehicle> detail(){
        return vehicleRepository.findAll();
    }

    @GetMapping("/vehicletest")
    public Optional<Vehicle> product(){
        return vehicleRepository.findById("루이");
        // return vehicleRepository.findById(name);
    }
   @GetMapping("/vehiclefindMade")
    public List<Vehicle> product2(){
        return vehicleRepository.findByManufacturer("AU테크");
        // return vehicleRepository.findById(name);
    }

}
