package com.capstone.backend.model;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity
@NoArgsConstructor
public class Car extends Vehicle {
    private int carType;// {1:4 mini, 2: sedan,3:hatchback,4:5 chỗ,5:7 chỗ, 6:7 chỗ gầm cao,7:bán tải}
    private String transmission; // truyền động {Số sàn:m, Số tự động: a}
    private boolean gps;
    private boolean reverseCamera;
    private boolean bluetooth;
    private boolean usb;
    private boolean driver;
}