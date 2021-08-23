package com.capstone.backend.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class Deposit {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private Date depositTime = new Date();
    private boolean status=true; // trạng thái thanh toán
    private int amount;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "payment_method_id")
    private PaymentMethod paymentMethod;
    
    
}