package com.example.authentication.service.impl;

import com.example.authentication.entity.User;
import com.example.authentication.repository.UserRepository;
import com.example.authentication.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public Optional<User> findUserByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
