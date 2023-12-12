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
public class Comment {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int commentSeq;
    @ManyToOne
    @JoinColumn(name="posting_seq")
    private Posting posting;
    @ManyToOne
    @JoinColumn(name="user_id")
    private Account account;
    private String content;
    private int groupSeq;
    private String registrationDate;
}
