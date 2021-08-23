package com.capstone.backend.util;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;

@Component
public class HelplerUtils {
    @Autowired
    private JavaMailSender emailSender;

    public String sendEmail(String email, String subject, String text) {
        int code = (int) Math.floor(((Math.random() * 899999) + 100000));
        MimeMessage message = emailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);
        try {
            helper.setFrom("support@gmail.com");
            helper.setTo(email);
            helper.setSubject(subject);
            helper.setText("<div><h3>"
                    + text + "</h3>"
                    + "<h1 style=\"display:inline-block;line-height: 5px;color: #008248; font-weight: bold;\">" + code
                    + "</h1>" + "</div>", true);
        } catch (MessagingException e) {
            e.printStackTrace();
        }
        emailSender.send(message);      
        return String.valueOf(code);
    }
}