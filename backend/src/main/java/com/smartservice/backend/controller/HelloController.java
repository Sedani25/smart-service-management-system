package com.smartservice.backend.controller;

import com.smartservice.backend.model.ServiceRequest;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class HelloController {

    private List<ServiceRequest> services = new ArrayList<>();

    public HelloController() {
        services.add(
                new ServiceRequest(1L, "Laptop Repair", "Pending")
        );

        services.add(
                new ServiceRequest(2L, "Phone Repair", "Completed")
        );
    }

    @GetMapping("/services")
    public List<ServiceRequest> getServices() {
        return services;
    }

    @PostMapping("/services")
    public ServiceRequest addService(
            @RequestBody ServiceRequest service
    ) {
        services.add(service);
        return service;
    }
}