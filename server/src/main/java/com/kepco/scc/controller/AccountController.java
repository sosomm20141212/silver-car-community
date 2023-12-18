package com.kepco.scc.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
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
    public Map<String,Object> login(@RequestBody Map<String,String> loginRequest) {
        String userId = loginRequest.get("userId");
        String password = loginRequest.get("password");
        Account account = accountRepository.findByUserIdAndPassword(userId, password);
        Map<String,Object> sendingData = new HashMap<>();

        if (account != null) {
            sendingData.put("success", true);
            sendingData.put("userId", account.getUserId());
            sendingData.put("admin", account.getAdmin());

            return sendingData;
        } else {
            sendingData.put("success", false);

            return sendingData;
        }
    }
     @GetMapping("/logout")
    public ResponseEntity<String> logout() {
        
        return ResponseEntity.ok("로그아웃 성공");
    }
    @DeleteMapping("/withdraw/{userId}")
    public void deletePosting(@PathVariable String userId) {
        Account deleteData = accountRepository.findByUserId(userId);

        accountRepository.delete(deleteData);
    }
}