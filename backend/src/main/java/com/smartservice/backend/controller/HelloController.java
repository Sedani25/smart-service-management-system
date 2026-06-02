package com.smartservice.backend.controller;

import com.smartservice.backend.model.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class HelloController {

    @GetMapping("/hello")
    public String hello() {
        return "Backend is working!";
    }

    @GetMapping("/services")
    public List<Service> getServices() {

        List<Service> services = new ArrayList<>();

        services.add(
                new Service(
                        1L,
                        "Laptop Repair",
                        "Pending"
                )
        );

        services.add(
                new Service(
                        2L,
                        "Phone Repair",
                        "Completed"
                )
        );

        return services;
    }
}