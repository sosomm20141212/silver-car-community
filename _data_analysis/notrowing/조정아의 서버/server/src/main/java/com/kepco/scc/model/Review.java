package com.kepco.scc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Review {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int reviewSeq;
    @ManyToOne
    @JoinColumn(name="user_id")
    private Account account;
    @ManyToOne
    @JoinColumn(name="vehicle_name")
    private Vehicle vehicle;
    private String content;
    private double rating;
    private String registrationDate;
}
