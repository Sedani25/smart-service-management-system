package com.smartservice.backend.model;

public class Service {

    private Long id;
    private String name;
    private String status;

    public Service(Long id, String name, String status) {
        this.id = id;
        this.name = name;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getStatus() {
        return status;
    }
}