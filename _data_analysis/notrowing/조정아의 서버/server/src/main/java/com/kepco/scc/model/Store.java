package com.kepco.scc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Store {
    @Id
    private int storeSeq;
    private String storeName;
    private String address;
    private String callNumber;
}
