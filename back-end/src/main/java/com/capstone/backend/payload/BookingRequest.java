package com.capstone.backend.payload;

import com.capstone.backend.model.Promotion;

import lombok.Data;

@Data
public class BookingRequest {
    private long startTime;
    private long endTime;
    private int amount;
    private Promotion promotion;
    private long vehicleId;
    private long paymentId;
}