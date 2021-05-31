package com.capstone.backend.model;

import javax.persistence.Entity;
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
public class Model {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private int suggestPrice;
    private boolean carProduction;
    @ManyToOne
    @JoinColumn(name ="brand_id")
    @JsonIgnore
    @EqualsAndHashCode.Exclude
    private Brand brand;
}