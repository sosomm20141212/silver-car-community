package com.kepco.scc.controller;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.kepco.scc.model.Vehicle;
import com.kepco.scc.repository.VehicleRepository;

@Controller
@ResponseBody
public class ProductController {
    @Autowired
    VehicleRepository vehicleRepository;

    @GetMapping("/vehicleinfo")
    public Optional<Vehicle> product(@RequestParam String vehicleName ){
        return vehicleRepository.findById(vehicleName);
    }

    @GetMapping("/vehiclemade")
    public List<Vehicle> madein(@RequestParam String menufacturer){
        return vehicleRepository.findByManufacturer(menufacturer);
       
    }
}
