package com.kepco.silver_car_community.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Data
@Entity
public class Attachement {
    @Id
    private String uid;
    private String fileName;
    @ManyToOne
    @JoinColumn(name="posting_seq")
    private Posting posting;
    private String registrationDate;
}
