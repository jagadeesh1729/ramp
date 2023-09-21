package com.ramp.bill_managementservice.services;

import com.ramp.bill_managementservice.dto.ManagerDto;
import com.ramp.bill_managementservice.exception.ManagerCreationException;
import com.ramp.bill_managementservice.exception.ManagerNotFound;

public interface ManagerService {
    ManagerDto createManager(ManagerDto managerDto) throws ManagerCreationException;
    ManagerDto getManagerByEmail(String email) throws ManagerNotFound;
}

