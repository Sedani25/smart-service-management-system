package com.smartservice.backend.service;

import com.smartservice.backend.model.ServiceRequest;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ServiceService {

    private List<ServiceRequest> services = new ArrayList<>();

    public ServiceService() {
        services.add(
                new ServiceRequest(
                        1L,
                        "Laptop Repair",
                        "Pending"
                )
        );

        services.add(
                new ServiceRequest(
                        2L,
                        "Phone Repair",
                        "Completed"
                )
        );
    }

    public List<ServiceRequest> getAllServices() {
        return services;
    }

    public ServiceRequest addService(ServiceRequest service) {
        services.add(service);
        return service;
    }
}
