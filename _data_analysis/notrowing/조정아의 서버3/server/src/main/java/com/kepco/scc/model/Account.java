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
public class Account {
    @Id
    private String userId;
    private String password;
    private String email;
    private int admin;
    private String registrationDate;
    @OneToMany(mappedBy="account", cascade=CascadeType.REMOVE)
    @JsonIgnore
    private List<Posting> postings = new ArrayList<>();
    @OneToMany(mappedBy="account", cascade=CascadeType.REMOVE)
    @JsonIgnore
    private List<Comment> comments = new ArrayList<>();
    @OneToMany(mappedBy="account", cascade=CascadeType.REMOVE)
    @JsonIgnore
    private List<Review> reviews = new ArrayList<>();
}
