package com.capstone.backend.service;

import javax.naming.NameAlreadyBoundException;

import com.capstone.backend.model.Location;
import com.capstone.backend.model.User;
import com.capstone.backend.payload.ResponseData;

public interface UserService {
    //User
    ResponseData saveUser (User user) throws NameAlreadyBoundException;
    ResponseData update (User user, long id);
    User getUserById(long id);
    ResponseData banUser(long id);

    //Location
    ResponseData saveLocation(Location location, long userId);
    ResponseData removeLocation(long id);
    ResponseData getAllLocationByUserId(long id);




    
}