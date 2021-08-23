package com.capstone.backend.model;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class DrivingLicense {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String number;
    private Date dob;
    private String imageLink;
    private boolean confirmed;
    private int permission;
    public DrivingLicense(String number, Date dob, String imageLink) {
        this.number = number;
        this.dob = dob;
        this.imageLink = imageLink;
    }

    
}
