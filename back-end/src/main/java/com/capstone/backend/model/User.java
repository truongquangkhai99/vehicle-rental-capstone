package com.capstone.backend.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @JsonIgnore
    private String password;
    private String fullName;
    private String phone;
    private String gender;
    private String email;
    private boolean emailVerified;
    private String role = "ROLE_USER";
    private boolean banned;
    private Date dob; // ngày sinh
    private String avatarLink = "http://localhost:8080/api/images/default-avatar.jpg"; // ảnh đại diện
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "wallet_id")
    private Wallet wallet = new Wallet();
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "response_id")
    private ResponseRate responseRate = new ResponseRate(); // tỉ lệ phản hồi
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "license_id")
    private DrivingLicense drivingLincense; // bằng lái xe
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Location> addresses;
    @OneToMany(mappedBy = "reviewer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Rating> ratings;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Rating> ratedByOther; // Danh sách đánh giá của chủ xe về mình
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "favorite_vehicle", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "vehicle_id"))
    @JsonIgnore
    private List<Vehicle> likedVehicles;
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonIgnore
    private List<Vehicle> myVehicles;
    @ManyToMany(cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinTable(name = "user_relative", joinColumns = @JoinColumn(name = "user_id"), inverseJoinColumns = @JoinColumn(name = "relatives_id"))
    private List<RelativesVehicle> relativesVehicles;

    public User(String password, String fullName, String email) {
        this.password = password;
        this.fullName = fullName;
        this.email = email;
    }
}