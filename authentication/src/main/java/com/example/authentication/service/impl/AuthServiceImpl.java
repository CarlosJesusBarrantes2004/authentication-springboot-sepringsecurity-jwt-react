package com.example.authentication.service.impl;

import com.example.authentication.controller.models.AuthResponse;
import com.example.authentication.controller.models.AuthenticationRequest;
import com.example.authentication.controller.models.RegisterRequest;
import com.example.authentication.entity.ERole;
import com.example.authentication.entity.Role;
import com.example.authentication.entity.User;
import com.example.authentication.repository.RoleRepository;
import com.example.authentication.repository.UserRepository;
import com.example.authentication.service.AuthService;
import com.example.authentication.service.JwtService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements AuthService {
    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final AuthenticationManager authenticationManager;

    @Override
    public AuthResponse register(RegisterRequest request) {
        Set<Role> roleEntitySet = request.getRoles()
                .stream()
                .map(role -> {
                    ERole eRole = ERole.valueOf(role);
                    Optional<Role> optionalRole = roleRepository.findByName(eRole);
                    return optionalRole.orElseGet(() -> Role.builder().name(eRole).build());
                }).collect(Collectors.toSet());

        User user = User.builder()
                .userName(request.getUserName())
                .email(request.getEmail())
                .password(passwordEncoder.encode(request.getPassword()))
                .roles(roleEntitySet)
                .build();
        userRepository.save(user);

        String token = jwtService.generateToken(user);

        return AuthResponse.builder()
                .message("Autenticación exitosa")
                .token(token)
                .roles(request.getRoles())
                .build();
    }

    @Override
    public AuthResponse authenticate(AuthenticationRequest request) {
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                request.getUserName(), request.getPassword()
        ));

        User user = userRepository.findByUserName(request.getUserName()).orElseThrow();
        String token = jwtService.generateToken(user);

        return AuthResponse.builder()
                .message("Autenticación exitosa")
                .token(token)
                .roles(user.getRoles().stream()
                        .map(role -> role.getName().name()).collect(Collectors.toSet()))
                .build();
    }
}
