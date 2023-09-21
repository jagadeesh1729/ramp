package com.ramp.categoryservice.controller;

import com.ramp.categoryservice.dto.EmployeeDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.EmployeeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.*;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class EmployeeControllerTest {

    private MockMvc mockMvc;

    @Mock
    private EmployeeService employeeService;


    @InjectMocks
    private EmployeeController employeeController;

    @BeforeEach
   void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(employeeController).build();
    }

    @Test
   void testGetAllEmployees() throws Exception {
        // Arrange
        EmployeeDto employee1 = new EmployeeDto(1L, "John Doe", LocalDate.of(1980, 1, 1), "Software Engineer");
        EmployeeDto employee2 = new EmployeeDto(2L, "Jane Smith", LocalDate.of(1985, 2, 15), "Product Manager");
        List<EmployeeDto> employees = Arrays.asList(employee1, employee2);
        when(employeeService.getAllEmployees()).thenReturn(employees);

        // Act & Assert
        mockMvc.perform(get("/category/employees"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("John Doe")))
                .andExpect(jsonPath("$[0].dob", is("1980-01-01")))
                .andExpect(jsonPath("$[0].description", is("Software Engineer")))
                .andExpect(jsonPath("$[1].id", is(2)))
                .andExpect(jsonPath("$[1].name", is("Jane Smith")))
                .andExpect(jsonPath("$[1].dob", is("1985-02-15")))
                .andExpect(jsonPath("$[1].description", is("Product Manager")));
    }

    @Test
   void testGetEmployeeById() throws Exception {
        // Arrange
        long id = 1L;
        EmployeeDto employee = new EmployeeDto(id, "John Doe", LocalDate.of(1980, 1, 1), "Software Engineer");
        when(employeeService.getEmployeeById(id)).thenReturn(employee);

        // Act & Assert
        mockMvc.perform(get("/category/employees/{id}", id))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("John Doe")))
                .andExpect(jsonPath("$.dob", is("1980-01-01")))
                .andExpect(jsonPath("$.description", is("Software Engineer")));
    }
    @Test
    void testGetEmployeeById_NotFound() throws Exception {
        long id = 1L;
        when(employeeService.getEmployeeById(id)).thenThrow(new NotFoundException("not found"));

        mockMvc = MockMvcBuilders.standaloneSetup(employeeController).build();

        mockMvc.perform(MockMvcRequestBuilders.get("/category/employees/{id}", id))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }


}
