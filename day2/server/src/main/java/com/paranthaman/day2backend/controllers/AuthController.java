package com.paranthaman.day2backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.paranthaman.day2backend.dtos.LoginEntity;
import com.paranthaman.day2backend.models.User;
import com.paranthaman.day2backend.services.AuthService;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
@CrossOrigin
@RequestMapping("/auth")
public class AuthController {
    
    @Autowired
    private AuthService authService;

    @GetMapping("/loginById/{uid}")
    public User getMethodName(@PathVariable String uid) {
        return authService.loginById(uid);
    }
    
    @PostMapping("/login")
    public User Login(@RequestBody LoginEntity loginEntity) {
        
        return authService.login(loginEntity);
    }

    @PostMapping("/signup")
    public User SignUp(@RequestBody User user) {
        return authService.signUp(user);
    }

    @GetMapping("/getUsers")
    public List<User> getUsers(){
        return authService.getUsers();
    }
    
}
