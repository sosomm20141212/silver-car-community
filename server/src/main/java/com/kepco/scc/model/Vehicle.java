package com.kepco.scc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
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
}
