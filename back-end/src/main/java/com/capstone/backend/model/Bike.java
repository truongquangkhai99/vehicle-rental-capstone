package com.capstone.backend.model;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Bike extends Vehicle {
    private char bikeType;
}