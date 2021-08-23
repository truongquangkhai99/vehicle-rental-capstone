package com.capstone.backend.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Transient;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private long startTime;
    private long endTime;
    private long createTime = System.currentTimeMillis();
    private long returnTime; // Thời gian trả xe
    private int amount;
    @Transient
    private String type;
    @OneToOne
    @JoinColumn(name = "promotion_id")
    private Promotion promotion;
    private String status; // {pending:p,reject:r,accept:a,cancel:c,finish:f}
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "deposit_id")
    private Deposit deposit;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id")
    private User user;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vehicle_id")
    private Vehicle vehicle;
}