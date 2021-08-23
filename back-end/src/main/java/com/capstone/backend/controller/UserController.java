package com.capstone.backend.controller;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import com.capstone.backend.jwt.JwtAuthenticationFilter;
import com.capstone.backend.jwt.JwtTokenProvider;
import com.capstone.backend.model.DrivingLicense;
import com.capstone.backend.model.Location;
import com.capstone.backend.model.User;
import com.capstone.backend.model.UserDetailImpl;
import com.capstone.backend.payload.ChangePasswordRequest;
import com.capstone.backend.payload.LoginRequest;
import com.capstone.backend.payload.LoginResponse;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.payload.UploadFileResponse;
import com.capstone.backend.service.FileStorageService;
import com.capstone.backend.service.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
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
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

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
   @Autowired
   private FileStorageService fileStorageService;

   @PostMapping("/login")
   public LoginResponse authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {
      // Xác thực từ username và password.
      Authentication authentication = authenticationManager
            .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
      // Set thông tin authentication vào Security Context
      SecurityContextHolder.getContext().setAuthentication(authentication);
      UserDetailImpl userDetail = (UserDetailImpl) authentication.getPrincipal();
      User u = userDetail.getUser();

      // Trả về jwt cho người dùng.
      String jwt = tokenProvider.generateToken(u);
      return new LoginResponse(jwt, u.getFullName(), u.getAvatarLink(), u.getRole());
   }

   @GetMapping("/changePassword")
   public ResponseEntity<?> getLikedProducts(@RequestParam String password, @RequestParam String newPassword,
         HttpServletRequest request) {
      try {
         long userId = jwtAuth.getUserIdFromRequest(request);
         userService.changePassword(userId, password,newPassword);
         return new ResponseEntity<>(HttpStatus.OK);
      } catch (Exception e) {
         e.printStackTrace();
         return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
      }
   }

   @PostMapping("/signup")
   public ResponseEntity<?> registerUser(@RequestBody LoginRequest signupRequest) {
      try {
         User u = userService.signup(signupRequest);
         String jwt = tokenProvider.generateToken(u);
         LoginResponse lr = new LoginResponse(jwt, u.getFullName(), u.getAvatarLink(), u.getRole());
         return new ResponseEntity<LoginResponse>(lr, HttpStatus.OK);
      } catch (Exception e) {
         e.printStackTrace();
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
   }

   @GetMapping("/getInfo")
   public ResponseEntity<?> getInfo(HttpServletRequest request) {
      try {
         long id = jwtAuth.getUserIdFromRequest(request);
         return new ResponseEntity<User>(userService.getInfo(id), HttpStatus.OK);
      } catch (Exception e) {
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
   }

   @GetMapping("/sendVerify")
   public ResponseEntity<?> sendVerify(HttpServletRequest request) {
      try {
         long id = jwtAuth.getUserIdFromRequest(request);
         return new ResponseEntity<String>(userService.sendVerify(id), HttpStatus.OK);
      } catch (Exception e) {
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
   }

   @GetMapping("/verify")
   public ResponseEntity<?> verify(HttpServletRequest request, @RequestParam String code,
         @RequestParam String jwtCode) {
      try {
         long id = jwtAuth.getUserIdFromRequest(request);
         boolean isVerify = userService.verify(jwtCode, code, id);
         if (isVerify)
            return new ResponseEntity<>(HttpStatus.OK);
         else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      } catch (Exception e) {
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
   }

   @PostMapping("/updateUser")
   public ResponseData updateUser(HttpServletRequest request, @RequestBody User user) {
      try {
         long userId = jwtAuth.getUserIdFromRequest(request);
         return userService.updateUser(user, userId);
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

   @GetMapping("/changeEmail")
   public ResponseEntity<?> changeEmail(HttpServletRequest request, @RequestParam String email) {
      try {
         userService.changeEmail(jwtAuth.getUserIdFromRequest(request), email);
         return new ResponseEntity<>(HttpStatus.OK);
      } catch (Exception e) {
         return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
      }
   }

   @GetMapping("/updatePhone")
   public ResponseData updatePhone(HttpServletRequest request, @RequestParam String phone) {
      try {
         return userService.updatePhone(jwtAuth.getUserIdFromRequest(request), phone);
      } catch (Exception e) {
         return new ResponseData("error", null);
      }
   }

   @PostMapping("/updateAvatar")
   public UploadFileResponse uploadFile(HttpServletRequest request, @RequestParam("file") MultipartFile file) {
      long userId = jwtAuth.getUserIdFromRequest(request);
      String fileName = userService.updateAvatar(userId);
      fileStorageService.storeFile(file, fileName);
      String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/images/").path(fileName)
            .toUriString();

      return new UploadFileResponse(fileName, fileDownloadUri, file.getContentType(), file.getSize());
   }

   @PostMapping("/updateDrivingLicense")
   public ResponseEntity<?> updateDrivingLincense(HttpServletRequest request,
         @RequestBody DrivingLicense drivingLicense) {
      long userId = jwtAuth.getUserIdFromRequest(request);
      userService.updateDrivingLincense(userId, drivingLicense);
      return new ResponseEntity<>(HttpStatus.OK);
   }

   @PostMapping("/updateGPLX")
   public UploadFileResponse updateGPLX(HttpServletRequest request, @RequestParam("file") MultipartFile file) {
      long userId = jwtAuth.getUserIdFromRequest(request);
      String fileName = userService.updateGPLX(userId);
      fileStorageService.storeFile(file, fileName);
      String fileDownloadUri = ServletUriComponentsBuilder.fromCurrentContextPath().path("/api/images/").path(fileName)
            .toUriString();

      return new UploadFileResponse(fileName, fileDownloadUri, file.getContentType(), file.getSize());
   }

   @GetMapping("/promotions")
   public ResponseData getPromotions() {
      try {
         return userService.getPromotions();
      } catch (Exception e) {
         return new ResponseData("error", null);
      }
   }
   @GetMapping("/forgetPassword")
    public ResponseEntity<?> forgetPassword(@RequestParam String email) {
        try {
            userService.forgetPassword(email);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<>(e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }

    @PostMapping("/forgetChangePassword")
    public ResponseEntity<?> forgetChangePassword(@RequestBody ChangePasswordRequest request) {
        try {
            User u = userService.forgetChangePassword(request);
            String jwt = tokenProvider.generateToken(u);
            return new ResponseEntity<LoginResponse>(
               new LoginResponse(jwt, u.getFullName(), u.getAvatarLink(), u.getRole()),
                    HttpStatus.OK);
        } catch (Exception e) {
            e.printStackTrace();
            return new ResponseEntity<String>( e.getMessage(),HttpStatus.BAD_REQUEST);
        }
    }
}