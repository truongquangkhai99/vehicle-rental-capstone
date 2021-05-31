package com.capstone.backend.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Data
@Entity
public class Brand {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private boolean bikeProduction=true; //sản xuất xe máy?
    private boolean carProduction=true;
    @OneToMany(mappedBy = "brand", cascade = CascadeType.ALL)
    private Set<Model> models;
}