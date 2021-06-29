package com.capstone.backend.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.capstone.backend.jwt.JwtAuthenticationFilter;
import com.capstone.backend.jwt.JwtTokenProvider;
import com.capstone.backend.model.Location;
import com.capstone.backend.model.User;
import com.capstone.backend.model.UserDetailImpl;
import com.capstone.backend.payload.LoginRequest;
import com.capstone.backend.payload.LoginResponse;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.service.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserController {

   @Autowired
   AuthenticationManager authenticationManager;

   @Autowired
   private JwtTokenProvider tokenProvider;
   @Autowired
   private UserServiceImpl userService;
   @Autowired
   JwtAuthenticationFilter jwtAuth;

   @PostMapping("/login")
   public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
      // Xác thực từ username và password.
      Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));
      // Set thông tin authentication vào Security Context
      SecurityContextHolder.getContext().setAuthentication(authentication);
      UserDetailImpl userDetail = (UserDetailImpl) authentication.getPrincipal();
      User u = userDetail.getUser();

      // Trả về jwt cho người dùng.
      String jwt = tokenProvider.generateToken(userDetail);
      return new LoginResponse(jwt, u.getFullName(), u.getAvatarLink());
   }

   @PostMapping("/signup")
   public ResponseData signup(User user) {
      try {
         return userService.saveUser(user);
      } catch (Exception e) {
         return new ResponseData(e.getMessage(), null);
      }
   }

   @PostMapping("/updateUser")
   public ResponseData updateUser(User user) {
      try {
         return userService.saveUser(user);
      } catch (Exception e) {
         return new ResponseData(e.getMessage(), null);
      }
   }

   @GetMapping("/banUser")
   public ResponseData banUser(@RequestParam long id) {
      try {
         return userService.banUser(id);
      } catch (Exception e) {
         return new ResponseData(e.getMessage(), null);
      }
   }

   @GetMapping("/myLocation")
   public ResponseData myLocation(HttpServletRequest request) {
      try {
         return userService.getAllLocationByUserId(jwtAuth.getUserIdFromRequest(request));
      } catch (Exception e) {
         return new ResponseData("error", null);
      }
   }

   @GetMapping("/removeLocation")
   public ResponseData removeLocation(@RequestParam long id, HttpServletRequest request) {
      try {
         return userService.removeLocation(id);
      } catch (Exception e) {
         return new ResponseData("error", null);
      }
   }

   @PostMapping("/saveLocation")
   public ResponseData saveLocation(@RequestBody Location location) {
      try {
         return new ResponseData("error", null);
      } catch (Exception e) {
         return new ResponseData("error", null);
      }
   }
}