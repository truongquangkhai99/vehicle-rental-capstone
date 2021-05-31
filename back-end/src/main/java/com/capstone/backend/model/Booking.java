package com.capstone.backend.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
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
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date depositTime; // Thời gian đặt cọc
    private Date startTime;
    private Date endTime;
    private Date returnTime; // Thời gian trả xe
    private int price;
    private char status; //{pending:p,cancel:c,finish:f}
    // @ManyToOne(fetch = FetchType.LAZY)
    // @JoinColumn(name = "user_id")
    // @EqualsAndHashCode.Exclude
    // @JsonIgnore
    // private User user;
    // private Vehicle vehicle;
}