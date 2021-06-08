package com.capstone.backend.model;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.Data;

@Entity
@Data
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int accountBalance;
    @OneToMany(mappedBy = "wallet",fetch = FetchType.LAZY, cascade = CascadeType.ALL )
    private Set<Transaction> transactions;

}