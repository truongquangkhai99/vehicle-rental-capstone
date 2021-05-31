package com.capstone.backend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;
    private String province;
    private String district;
    private String ward;
    private String street;
    private String latitude;
    private String longitude;
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private User user;

}