package com.ramp.categoryservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ramp.categoryservice.dto.ManagerDto;
import com.ramp.categoryservice.service.ManagerService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import static org.hamcrest.Matchers.*;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

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
   void testCreateManager() throws Exception {
        // Arrange
        ManagerDto managerDto = new ManagerDto( 1L,"John Doe", "johndoe@example.com", "password");
        ManagerDto savedManagerDto = new ManagerDto(1L, "John Doe", "johndoe@example.com", "password");
        when(managerService.createManager(managerDto)).thenReturn(savedManagerDto);

        // Act & Assert
        mockMvc.perform(post("/category/managers")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(managerDto)))
                .andExpect(status().isCreated())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("John Doe")))
                .andExpect(jsonPath("$.email", is("johndoe@example.com")))
                .andExpect(jsonPath("$.password", is("password")));
    }

    @Test
   void testGetManagerByEmail() throws Exception {
        // Arrange
        String email = "johndoe@example.com";
        ManagerDto managerDto = new ManagerDto(1L, "John Doe", email, "password");
        when(managerService.getManagerByEmail(email)).thenReturn(managerDto);

        // Act & Assert
        mockMvc.perform(get("/category/managers/{email}", email))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("John Doe")))
                .andExpect(jsonPath("$.email", is("johndoe@example.com")))
                .andExpect(jsonPath("$.password", is("password")));
    }

}
