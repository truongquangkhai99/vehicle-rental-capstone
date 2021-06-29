package com.capstone.backend.service;

import java.util.List;
import java.util.Optional;

import javax.naming.NameAlreadyBoundException;

import com.capstone.backend.model.Location;
import com.capstone.backend.model.User;
import com.capstone.backend.payload.ResponseData;
import com.capstone.backend.repository.LocationRepository;
import com.capstone.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;
    private LocationRepository locationRepository;

    @Override
    public ResponseData saveUser(User user) throws NameAlreadyBoundException {
        Optional<User> u = userRepository.findByEmail(user.getEmail());
        if (u.isPresent()) {
            throw new NameAlreadyBoundException("Email đã được sử dụng");
        }
        userRepository.save(user);
        return new ResponseData("ok", null);
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
        u.setBanned(true);
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
        List<Location> locations= locationRepository.findAllByUserId(id);
        return new ResponseData("ok", locations);
    }
}