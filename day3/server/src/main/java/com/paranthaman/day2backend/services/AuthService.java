package com.paranthaman.day2backend.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.paranthaman.day2backend.dtos.LoginEntity;
import com.paranthaman.day2backend.models.User;
import com.paranthaman.day2backend.repositorys.UserRepo;

@Service
public class AuthService {

    @Autowired
    private UserRepo userRepo;

    private static BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder(10);

    public User login(LoginEntity loginEntity) {
        User user = userRepo.findByEmail(loginEntity.getEmail());
        if (user != null) {
            if (passwordEncoder.matches(loginEntity.getPassword(), user.getPassword())) {
                return user;
            } else
                return null;
        }
        return null;
    }

    public User signUp(User user) {
        User existUser = userRepo.findByEmail(user.getEmail());
        if (existUser == null) {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            return userRepo.save(user);
        }
        return null;
    }

    public User loginById(String uid) {
        return userRepo.findById(uid).get();
    }

    public List<User> getUsers() {
        return (List<User>) userRepo.findAllByRole("user");
    }

}
