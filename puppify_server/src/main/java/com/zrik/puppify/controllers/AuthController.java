package com.zrik.puppify.controllers;

import com.zrik.puppify.utils.Constants;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(Constants.AUTH_URL)
public class AuthController {
    
    @GetMapping(Constants.LOGIN_URL)
    public void login() {

    }
}
