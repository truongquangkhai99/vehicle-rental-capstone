package com.capstone.backend.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToMany;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class RelativesVehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name; // Tên của người có biển số
    @Column(unique = true)
    private String licensePlate; //Biển số
    @ManyToMany(mappedBy = "likedVehicles")
    @EqualsAndHashCode.Exclude
    private Set<User> users;
}