package com.capstone.backend.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class HelplerUtils {
    @Autowired
    private JavaMailSender emailSender;

    public String sendEmail(String email, String subject, String text) {
        int code = (int) Math.floor(((Math.random() * 899999) + 100000));
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("caphethodung@gmail.com");
        message.setTo(email);
        message.setSubject(subject);
        message.setText(text + code);
        emailSender.send(message);
        return String.valueOf(code);
    }
}