package com.example.authentication.service;

import com.example.authentication.entity.User;

import java.util.Optional;

public interface UserService {
    Optional<User> findUserByUserName(String email);
}
