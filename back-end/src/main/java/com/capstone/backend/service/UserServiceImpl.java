package com.capstone.backend.service;

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
    public ResponseData saveUser(User user) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData getUserById(int id) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData getUserByUserName(String username) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData banUser(User user) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData saveLocation(Location location) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData removeLocation(Location location) {
        // TODO Auto-generated method stub
        return null;
    }

    @Override
    public ResponseData getAllLocationByUserId(long id) {
        // TODO Auto-generated method stub
        return null;
    }
}