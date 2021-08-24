package com.capstone.backend.repository;

import java.util.List;

import com.capstone.backend.model.Notification;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface NotificationRepository extends JpaRepository<Notification, Long> {

	List<Notification> findByReceiverIdOrderByCreateTimeDesc(long userId);

}