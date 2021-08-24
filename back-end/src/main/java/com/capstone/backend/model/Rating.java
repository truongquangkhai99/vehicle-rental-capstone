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
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Rating {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String content;
    private int numStar;
    private Date createTime;
    private String type;
    @ManyToOne
    @JoinColumn(name = "reviewer_id")
    private User reviewer; // Người đánh giá
    @ManyToOne
    @JoinColumn(name = "vehicle_id")
    @JsonIgnore
    private Vehicle vehicle; // xe được đánh giá
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user; // Người sau khi thuê xe đc chủ xe đánh giá
}