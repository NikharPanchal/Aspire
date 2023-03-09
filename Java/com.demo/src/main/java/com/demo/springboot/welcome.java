package com.demo.springboot;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class welcome {
	
	@GetMapping("/welcome")
	public String message() {
		return "Hello world";
	}
	
}