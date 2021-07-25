package com.capstone.backend.payload;

import javax.validation.constraints.NotBlank;

import lombok.Data;
@Data
public class LoginRequest {
    @NotBlank
    private String email;
    private String fullName;
    @NotBlank
    private String password;
}