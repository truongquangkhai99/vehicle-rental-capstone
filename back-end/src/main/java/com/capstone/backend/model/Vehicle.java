package com.capstone.backend.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Inheritance(strategy = InheritanceType.JOINED)
public class Vehicle {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String licensePlates;
    private boolean actived;
    private String yom; // năm sản xuất
    private String fuelType;
    private int fuelConsumption; // tiêu thụ nhiên liệu/100km
    private int originPrice;
    private String description;
    private boolean deliveryEnable;
    private int deliveryRadius; // Khoảng cách giao xe tối đa(km)
    private int deliveryRadiusFree; // khoảng cách miễn phí giao xe(km)
    private int deliveryFee; // (*1000đ/km)
    private boolean limitEnable;
    private int limitDistance; // giới hạn quãng đường tối đa(km)
    private int outLimitFee; // giá vượt giới hạn(*1000đ/km)
    private int numBooking; // giá vượt giới hạn(*1000đ/km)
    private String mainImg;
    @Transient
    private int distance; // Khoảng cách từ xe tới vị trí đặt xe

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    @OneToOne
    @JoinColumn(name = "location_id")
    private Location location;
    @OneToOne
    @JoinColumn(name = "model_id")
    private Model model;
    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Image> images;
    @OneToMany(mappedBy = "vehicle", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Rating> rating;
    @ManyToMany(mappedBy = "likedVehicles")
    @EqualsAndHashCode.Exclude
    @JsonIgnore
    private List<User> userLiked;
}