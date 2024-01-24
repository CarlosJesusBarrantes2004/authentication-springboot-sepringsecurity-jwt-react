package com.example.authentication.service;

import com.example.authentication.controller.models.AuthResponse;
import com.example.authentication.controller.models.AuthenticationRequest;
import com.example.authentication.controller.models.RegisterRequest;

public interface AuthService {
    AuthResponse register(RegisterRequest request);

    AuthResponse authenticate(AuthenticationRequest request);
}
