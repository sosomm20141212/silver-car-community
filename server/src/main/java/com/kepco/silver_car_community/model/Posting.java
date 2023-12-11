package com.kepco.silver_car_community.model;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Data;

@Data
@Entity
public class Posting {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int postingSeq;
    @ManyToOne
    @JoinColumn(name="user_id")
    private Account account;
    private String title;
    private String content;
    private int type;
    private int view;
    private String registrationDate;
    @OneToMany
    @JsonIgnore
    private List<Attachement> attachements;
    @OneToMany
    @JsonIgnore
    private List<Comment> comments;
}
