package com.ramp.bill_managementservice.services;

import com.ramp.bill_managementservice.dto.ManagerDto;
import com.ramp.bill_managementservice.entity.Manager;
import com.ramp.bill_managementservice.exception.ManagerCreationException;
import com.ramp.bill_managementservice.exception.ManagerNotFound;
import com.ramp.bill_managementservice.mapper.ManagerModalMapper;
import com.ramp.bill_managementservice.repository.ManagerRepository;import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManagerServiceImpl implements ManagerService {

    @Autowired
    private ManagerRepository managerRepository;
    private ManagerModalMapper modelMapper;

    public ManagerServiceImpl() {
        modelMapper = new ManagerModalMapper();
    }


    @Override
    public ManagerDto createManager(ManagerDto managerDto) throws ManagerCreationException {
        if (managerDto == null || managerDto.getName() == null || managerDto.getEmail() == null || managerDto.getPassword() == null) {
            throw new ManagerCreationException("Invalid manager details");
        }
        managerRepository.save(modelMapper.dtoToEntity(managerDto));
        return managerDto;
    }

    @Override
    public ManagerDto getManagerByEmail(String email) throws ManagerNotFound {
        Manager manager = managerRepository.findByEmail(email)
                .orElseThrow(() -> new ManagerNotFound("Manager not found with email: " + email));
        return modelMapper.entityToDto(manager);
    }
}

