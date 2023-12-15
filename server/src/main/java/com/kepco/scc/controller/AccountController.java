package com.kepco.scc.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.kepco.scc.model.Account;
import com.kepco.scc.repository.AccountRepository;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AccountController {
    @Autowired
    AccountRepository accountRepository;

    @PostMapping("/login")
    public String login(@RequestBody Map<String,String> loginRequest) {
        String userId = loginRequest.get("userId");
        String password = loginRequest.get("password");
        
        Account account = accountRepository.findByUserIdAndPassword(userId, password);
        
        if (account != null) {
            return userId;
        } else {
            return "false";
        }
    }

     @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        
        return ResponseEntity.ok("로그아웃 성공");
    }
}