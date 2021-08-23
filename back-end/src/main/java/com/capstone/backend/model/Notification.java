package com.capstone.backend.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Notification {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY) 
   private long id;
   private String title;
   private String content;
   private String contentDetail;
   private String imgLink;
   private String link;
   private Date createTime= new Date();
   private boolean readed;
   @OneToOne
   @JoinColumn(name = "sender_id")
   private User sender;
   @OneToOne
   @JoinColumn(name = "receiver_id")
   private User receiver;
}