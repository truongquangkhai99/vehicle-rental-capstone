package com.capstone.backend.service;

import java.util.List;

import com.capstone.backend.model.AidUser;
import com.capstone.backend.model.AidVehicle;
import com.capstone.backend.repository.AidUserRepository;
import com.capstone.backend.repository.AidVehicleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AidService {
    @Autowired
    private AidUserRepository aidUserRepository;
    @Autowired
    private AidVehicleRepository aidVehicleRepository;

    public List<AidUser> findAid(String licensePlate) {
        return aidUserRepository.findByAidVehicleLicensePlate(licensePlate);
    }

    public void addAid(String licensePlate, String aidName, String aidPhone) {
        AidVehicle av = aidVehicleRepository.findByLicensePlate(licensePlate);
        AidUser au = aidUserRepository.findByNameAndPhone(aidName,aidPhone);
        if(av==null){
            av= new AidVehicle();
        }
        if(au==null){
            au= new AidUser(aidName,aidPhone);
        }
        List<AidVehicle> lav = au.getAidVehicle();
        lav.add(av);
        au.setAidVehicle(lav);
        List<AidUser> lau = av.getAidUser();
        lau.add(au);
        av.setAidUser(lau);
        aidVehicleRepository.save(av);

    }
}