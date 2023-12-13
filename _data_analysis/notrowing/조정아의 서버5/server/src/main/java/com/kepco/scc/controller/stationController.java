package com.kepco.scc.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kepco.scc.model.Station;
import com.kepco.scc.repository.StationRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class stationController {
    @Autowired
    StationRepository stationRepository;

    @GetMapping("/api/station")
    public List<Station> station() {
        return stationRepository.findAll();
    }

    @PostMapping("/api/station")
    public List<Station> stationAddress(@RequestBody Map<String, String> address) {
        String stationaddress = address.get("city");
        return stationRepository.findByAddressContaining(stationaddress);
    }

}
