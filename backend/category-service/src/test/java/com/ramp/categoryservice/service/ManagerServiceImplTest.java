package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.ManagerDto;
import com.ramp.categoryservice.entity.Manager;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.ManagerRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.modelmapper.ModelMapper;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.initMocks;
@ExtendWith(SpringExtension.class)
class ManagerServiceImplTest {

    @Mock
    private ManagerRepository managerRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private ManagerServiceImpl managerService;

    @BeforeEach
    void setUp() {
        initMocks(this);
    }

    @Test
    void testCreateManager() {
        ManagerDto managerDto = new ManagerDto();
        managerDto.setEmail("manager@test.com");
        Manager manager = new Manager();
        manager.setEmail("manager@test.com");

        when(modelMapper.map(managerDto, Manager.class)).thenReturn(manager);
        when(managerRepository.save(any(Manager.class))).thenReturn(manager);
        when(modelMapper.map(manager, ManagerDto.class)).thenReturn(managerDto);

        ManagerDto savedManagerDto = managerService.createManager(managerDto);

        assertEquals(managerDto.getEmail(), savedManagerDto.getEmail());
    }

    @Test
    void testGetManagerByEmail() {
        String email = "manager@test.com";
        Manager manager = new Manager();
        manager.setEmail(email);
        when(managerRepository.findByEmail(email)).thenReturn(Optional.of(manager));
        ManagerDto managerDto = new ManagerDto();
        when(modelMapper.map(manager, ManagerDto.class)).thenReturn(managerDto);

        ManagerDto foundManagerDto = managerService.getManagerByEmail(email);

        assertEquals(managerDto, foundManagerDto);
    }

    @Test
    void testGetManagerByEmailNotFound() {
        String email = "manager@test.com";

        when(managerRepository.findByEmail(email)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFound.class, () -> managerService.getManagerByEmail(email));
    }

}
