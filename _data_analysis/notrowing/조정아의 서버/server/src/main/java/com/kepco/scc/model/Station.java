package com.kepco.scc.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Data
@Entity
public class Station {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private int stationSeq;
    private String stationName;
    private String address;
    private String startWeek;
    private String endWeek;
    private String startSaturday;
    private String endSaturday;
    private String startHoliday;
    private String endHoliday;
    private String simultaneousUsers;
    private String airInjection;
    private String phoneCharging;
    private String agency;
    private String callNumber;
}
