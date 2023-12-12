package com.kepco.scc.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Vehicle {
    @Id
    private String vehicleName;
    private String manufacturer;
    private int price;
    private String color;
    private String dimensions;
    private String cargoSize;
    private String loadCapacity;
    private int canopy;
    private int wheels;
    private String wheelSize;
    private String battery;
    private String maximumOutput;
    private String maximumSpeed;
    private String mileage;
    private String chargingTime;
    private String weight;
    private int view;
    @OneToMany(mappedBy="vehicle", cascade=CascadeType.REMOVE)
    @JsonIgnore
    private List<Review> reviews = new ArrayList<>();
}
