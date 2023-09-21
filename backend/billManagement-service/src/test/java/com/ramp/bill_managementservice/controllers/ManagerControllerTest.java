package com.ramp.bill_managementservice.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ramp.bill_managementservice.dto.ManagerDto;
import com.ramp.bill_managementservice.services.ManagerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.mockito.ArgumentMatchers.any;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class ManagerControllerTest {

    private MockMvc mockMvc;

    @Mock
    private ManagerService managerService;

    private final ObjectMapper objectMapper = new ObjectMapper();

    @InjectMocks
    private ManagerController managerController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(managerController).build();
    }
    @Test
     void testCreateManager_ValidManagerDto_ReturnsCreatedStatus() throws Exception {
        // Arrange
        ManagerDto managerDto = new ManagerDto();
        managerDto.setName("John Doe");
        managerDto.setEmail("johndoe@example.com");
        managerDto.setPassword("password");

        ManagerDto savedManagerDto = new ManagerDto();
        savedManagerDto.setId(1L);
        savedManagerDto.setName("John Doe");
        savedManagerDto.setEmail("johndoe@example.com");

        when(managerService.createManager(any(ManagerDto.class))).thenReturn(savedManagerDto);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders
                        .post("/bill/managers/")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(managerDto)))
                .andExpect(MockMvcResultMatchers.status().isCreated())
                .andReturn();
    }
    @Test
     void testGetManagerByEmail_ExistingEmail_ReturnsOkStatus() throws Exception {
        String email = "johndoe@example.com";

        ManagerDto managerDto = new ManagerDto();
        managerDto.setId(1L);
        managerDto.setName("John Doe");
        managerDto.setEmail(email);

        when(managerService.getManagerByEmail(anyString())).thenReturn(managerDto);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders
                        .get("/bill/managers/{email}", email))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andReturn();
    }



}