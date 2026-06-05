package com.smartservice.backend.controller;

import com.smartservice.backend.model.Service;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class HelloController {

    private List<Service> services = new ArrayList<>();

    public HelloController() {
        services.add(
                new Service(1L, "Laptop Repair", "Pending")
        );

        services.add(
                new Service(2L, "Phone Repair", "Completed")
        );
    }

    @GetMapping("/services")
    public List<Service> getServices() {
        return services;
    }

    @PostMapping("/services")
    public Service addService(
            @RequestBody Service service
    ) {
        services.add(service);
        return service;
    }
}