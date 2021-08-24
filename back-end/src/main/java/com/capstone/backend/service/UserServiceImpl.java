package com.capstone.backend.service;

import java.util.List;
import java.util.Optional;

import javax.naming.NameAlreadyBoundException;

import com.capstone.backend.model.DrivingLicense;
import com.capstone.backend.model.Location;
import com.capstone.backend.model.User;
import com.capstone.backend.payload.ChangePasswordRequest;
import com.capstone.backend.payload.LoginRequest;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.LocationRepository;
import com.capstone.backend.repository.PromotionRepository;
import com.capstone.backend.repository.UserRepository;
import com.capstone.backend.util.HelplerUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private LocationRepository locationRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private PromotionRepository promotionRepository;
    @Autowired
    private HelplerUtils helper;

    @Override
    public ResponseData saveUser(User user) throws NameAlreadyBoundException {
        Optional<User> u = userRepository.findByEmail(user.getEmail());
        if (u.isPresent()) {
            throw new NameAlreadyBoundException("Email đã được sử dụng");
        }
        userRepository.save(user);
        return new ResponseData("ok", null);
    }

    public User signup(LoginRequest signupRequest) throws Exception {
        String email = signupRequest.getEmail();
        Optional<User> u = userRepository.findByEmail(email);
        if (u.isPresent()) {
            throw new Exception("Email đã được sử dụng");
        } else {
            User user = new User(passwordEncoder.encode(signupRequest.getPassword()), signupRequest.getFullName(),
                    email);
            user.setPhone(signupRequest.getPhone());
            return userRepository.save(user);
        }
    }

    public String sendVerify(long id) {
        User u = userRepository.getById(id);
        String code = helper.sendEmail(u.getEmail(), "Xác Thực Tài Khoản", "Mã xác thực của bạn là: ");
        return passwordEncoder.encode(code);
    }

    public boolean verify(String jwtCode, String code, long id) {
        if (passwordEncoder.matches(code, jwtCode)) {
            User u = userRepository.getById(id);
            u.setEmailVerified(true);
            userRepository.save(u);
            return true;
        }
        return false;
    }

    @Override
    public ResponseData update(User user, long id) {
        // User u = getUserById(id);
        // u.set
        // userRepository.save(user);
        return new ResponseData("ok", null);
    }

    @Override
    public User getUserById(long id) {
        Optional<User> u = userRepository.findById(id);
        return u.isPresent() ? u.get() : null;
    }

    @Override
    public ResponseData banUser(long id) {
        User u = getUserById(id);
        u.setBanned(!u.isBanned());
        userRepository.save(u);
        return new ResponseData("ok", null);
    }

    @Override
    public ResponseData saveLocation(Location location, long userId) {
        User u = getUserById(userId);
        location.setUser(u);
        locationRepository.save(location);
        return new ResponseData("ok", location);
    }

    @Override
    public ResponseData removeLocation(long id) {
        Location l = locationRepository.findById(id).get();
        locationRepository.delete(l);
        return new ResponseData("ok", null);
    }

    @Override
    public ResponseData getAllLocationByUserId(long id) {
        List<Location> locations = locationRepository.findAllByUserId(id);
        return new ResponseData("ok", locations);
    }

    public User getInfo(long id) {
        return userRepository.findById(id).get();
    }

    public ResponseData updatePhone(Long id, String phone) {
        User u = userRepository.findById(id).get();
        u.setPhone(phone);
        userRepository.save(u);
        return new ResponseData("ok", true);
    }

    public ResponseData updateUser(User user, long userId) {
        User u = userRepository.findById(userId).get();
        u.setFullName(user.getFullName());
        u.setDob(user.getDob());
        u.setGender(user.getGender());
        userRepository.save(u);
        return new ResponseData("ok", null);
    }

    public String updateAvatar(long id) {
        User u = userRepository.findById(id).get();
        u.setAvatarLink("http://localhost:8080/api/images/avatar" + id);
        userRepository.save(u);
        return "avatar" + id;
    }

    public void updateDrivingLincense(long userId, DrivingLicense drivingLicense) {
        User u = userRepository.findById(userId).get();
        DrivingLicense dl = u.getDrivingLincense();
        dl.setNumber(drivingLicense.getNumber());
        dl.setDob(drivingLicense.getDob());
        dl.setConfirmed(false);
        u.setDrivingLincense(dl);
        userRepository.save(u);
    }

    public String updateGPLX(long userId) {
        User u = userRepository.findById(userId).get();
        DrivingLicense dl = u.getDrivingLincense();
        if (dl == null) {
            dl = new DrivingLicense();
        }
        dl.setImageLink("http://localhost:8080/api/images/drivingLicense" + userId);
        dl.setPermission(2);
        u.setDrivingLincense(dl);
        userRepository.save(u);
        return "drivingLicense" + userId;
    }

    public void changeEmail(long id, String email) throws Exception {
        User u = userRepository.findById(id).get();
        Optional<User> u2 = userRepository.findByEmail(email);
        if (u2.isPresent()) {
            throw new Exception("Email đã có người sử dụng");
        }
        u.setEmail(email);
        u.setEmailVerified(false);
        userRepository.save(u);
    }

    public void changePassword(long userId, String password, String newPassword) throws Exception {
        User u = userRepository.findById(userId).get();
        if (passwordEncoder.matches(password, u.getPassword())) {
            u.setPassword(passwordEncoder.encode(newPassword));
            userRepository.save(u);
        } else {
            throw new Exception("Sai mật khẩu");
        }
    }

    public ResponseData getPromotions() {
        return new ResponseData("ok", promotionRepository.findAll());
    }

    public void forgetPassword(String email) throws Exception {
        Optional<User> u = userRepository.findByEmail(email);
        if (u.isPresent()) {
            String code = helper.sendEmail(email, "Thay đổi mật khẩu", "Mật khẩu mới của bạn là: ");
            User user = u.get();
            user.setPassword(passwordEncoder.encode(code));
            userRepository.save(user);
        } else {
            throw new Exception("Email không tồn tại!");
        }
    }

    public User forgetChangePassword(ChangePasswordRequest request) {
        User u = userRepository.findByEmail(request.getEmail()).get();
        u.setEmailVerified(true);
        if (passwordEncoder.matches(request.getPassword(), u.getPassword())) {
            u.setPassword(passwordEncoder.encode(request.getNewPassword()));
        }
        return userRepository.save(u);
    }

}