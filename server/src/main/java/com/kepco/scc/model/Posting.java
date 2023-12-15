package com.kepco.scc.model;

import java.util.ArrayList;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.CascadeType;
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
    private int view;
    private String registrationDate;
    @OneToMany(mappedBy="posting", cascade=CascadeType.REMOVE)
    @JsonIgnore
    private List<Comment> comments = new ArrayList<>();
}
