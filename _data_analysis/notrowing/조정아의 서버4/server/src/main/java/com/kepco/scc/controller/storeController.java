package com.kepco.scc.controller;

import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.kepco.scc.model.Store;
import com.kepco.scc.repository.StoreRepository;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class storeController {
    @Autowired
    StoreRepository storeRepository;

    @GetMapping("/api/store")
    public List<Store> store() {
        return storeRepository.findAll();
    }

    @PostMapping("/api/store")
    public List<Store> storeAddress(@RequestBody Map<String, String> address) {
        String storeaddress = address.get("city");
        return storeRepository.findByAddressContaining(storeaddress);
    }
}
