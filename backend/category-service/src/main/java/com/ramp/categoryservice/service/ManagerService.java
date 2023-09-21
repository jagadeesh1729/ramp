package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.ManagerDto;

public interface ManagerService {
    ManagerDto createManager(ManagerDto managerDto);
    ManagerDto getManagerByEmail(String email);
}