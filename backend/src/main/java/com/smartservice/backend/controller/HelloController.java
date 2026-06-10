package com.smartservice.backend.controller;

import com.smartservice.backend.model.ServiceRequest;
import com.smartservice.backend.service.ServiceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
public class HelloController {

    private final ServiceService serviceService;

    public HelloController(ServiceService serviceService) {
        this.serviceService = serviceService;
    }

    @GetMapping("/services")
    public List<ServiceRequest> getServices() {
        return serviceService.getAllServices();
    }

    @PostMapping("/services")
    public ServiceRequest addService(
            @RequestBody ServiceRequest service
    ) {
        return serviceService.addService(service);
    }
}