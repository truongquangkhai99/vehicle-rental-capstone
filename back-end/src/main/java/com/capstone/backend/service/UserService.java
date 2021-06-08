package com.capstone.backend.service;

import java.util.List;

import com.capstone.backend.model.Location;
import com.capstone.backend.model.User;
import com.capstone.backend.payload.ResponseData;

public interface UserService {
    //User
    ResponseData saveUser(User user);
    ResponseData getUserById(int id);
    ResponseData getUserByUserName(String username);
    ResponseData banUser(User user);

    //Location
    ResponseData saveLocation(Location location);
    ResponseData removeLocation(Location location);
    ResponseData getAllLocationByUserId(long id);




    
}