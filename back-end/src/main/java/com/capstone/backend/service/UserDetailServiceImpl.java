package com.capstone.backend.service;

import javax.transaction.Transactional;

import com.capstone.backend.model.User;
import com.capstone.backend.model.UserDetailImpl;
import com.capstone.backend.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailServiceImpl implements UserDetailsService {
    @Autowired
    private UserRepository userR;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String email) {
        User user = userR.findByEmail(email).get();
        if (user == null) {
            throw new UsernameNotFoundException("Not found: " + email);
        }
        return new UserDetailImpl(user);
    }

    @Transactional
    public UserDetails loadUserById(Long id) {
        User user = userR.findById(id)
                .orElseThrow(() -> new UsernameNotFoundException("User not found with id: " + id));

        return new UserDetailImpl(user);
    }

}
