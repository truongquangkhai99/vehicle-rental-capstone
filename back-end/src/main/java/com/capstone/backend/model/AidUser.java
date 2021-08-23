package com.capstone.backend.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class AidUser {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String phone;
    @ManyToMany(mappedBy = "aidUser")
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private List<AidVehicle> aidVehicle = new ArrayList<>();

    public AidUser(String name, String phone) {
        this.name = name;
        this.phone = phone;
    }
    
}