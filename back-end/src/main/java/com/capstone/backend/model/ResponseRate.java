package com.capstone.backend.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
public class ResponseRate {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int totalResponse; //Tổng số lần phản hồi
    private int totalRequest; //Tổng số request nhận đc
    private int totalAgree; //Tổng số lần đồng ý
    private long totalHoursResponse; //Tổng lượng thời gian chờ để phản hồi

    //tỉ lệ phản hồi = totalResponse/totalRequest
    //thời gian phản hồi = totalHoursResponse/totalResponse
    //tỉ lệ đồng ý = totalAgree/totalResponse
}