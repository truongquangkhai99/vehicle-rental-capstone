package com.capstone.backend.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;

@Entity
@Data
public class Notification {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY) 
   private long id;   
   private String link;
   private String title;
   private String content;
   private Date createTime= new Date();
   @OneToOne
   @JoinColumn(name = "sender_id")
   private User sender;
   @OneToOne
   @JoinColumn(name = "receiver_id")
   private User receiver;
}