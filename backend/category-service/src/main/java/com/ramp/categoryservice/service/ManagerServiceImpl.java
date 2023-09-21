package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.ManagerDto;
import com.ramp.categoryservice.entity.Manager;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.ManagerRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ManagerServiceImpl implements ManagerService {

    @Autowired
    private ManagerRepository managerRepository;

    private ModelMapper modelMapper;

    public ManagerServiceImpl() {
        modelMapper = new ModelMapper();
    }


    @Override
    public ManagerDto createManager(ManagerDto managerDto) {
        Manager manager = modelMapper.map(managerDto, Manager.class);
        Manager savedManager = managerRepository.save(manager);
        return modelMapper.map(savedManager, ManagerDto.class);
    }

    @Override
    public ManagerDto getManagerByEmail(String email) {
        Manager manager = managerRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFound("Manager not found with email: " + email));
        return modelMapper.map(manager, ManagerDto.class);
    }
}