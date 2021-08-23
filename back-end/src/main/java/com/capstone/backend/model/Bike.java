package com.capstone.backend.model;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Bike extends Vehicle {
    private String bikeType; // {tay ga: g, xe số: s, tay côn: c}
}