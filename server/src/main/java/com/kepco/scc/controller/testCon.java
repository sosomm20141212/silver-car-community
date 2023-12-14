package com.kepco.scc.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class testCon {
    @GetMapping("/api/hello")
    public String test() {
        return "Hello, world!";
    }



}
