package com.ramp.bill_managementservice.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import com.ramp.bill_managementservice.dto.EmployeeDto;
import com.ramp.bill_managementservice.entity.Employee;
import com.ramp.bill_managementservice.exception.EmployeeEmptyException;
import com.ramp.bill_managementservice.exception.EmployeeNotFoundException;
import com.ramp.bill_managementservice.exception.InvalidFormatException;
import com.ramp.bill_managementservice.repository.EmployeeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

class EmployeeServiceImplTest {

    @Mock
    private EmployeeRepository employeeRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private EmployeeServiceImpl employeeService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }





    @Test
     void testGetAllEmployees_Successful() throws EmployeeNotFoundException, EmployeeEmptyException {
        // Prepare test data
        List<Employee> employees = new ArrayList<>();
        // Add some employees to the list
        Employee employee1 = new Employee();
        employee1.setName("John Doe");
        employees.add(employee1);
        Employee employee2 = new Employee();
        employee2.setName("Jane Smith");
        employees.add(employee2);

        // Mock the employeeRepository.findAll method
        when(employeeRepository.findAll()).thenReturn(employees);

        // Call the method under test
        List<EmployeeDto> result = employeeService.getAllEmployees();

        // Verify the result
        List<String> expectedNames = List.of("John Doe", "Jane Smith");

        List<String> actualNames = result.stream()
                .map(EmployeeDto::getName)
                .collect(Collectors.toList());
        assertEquals(expectedNames, actualNames);
    }
    @Test
     void testGetAllEmployees_NoEmployeesFound() {
        // Prepare test data
        List<Employee> employees = new ArrayList<>();

        // Mock the employeeRepository.findAll method
        when(employeeRepository.findAll()).thenReturn(employees);

        // Call the method under test and verify that it throws the expected exception
        assertThrows(EmployeeEmptyException.class, () -> employeeService.getAllEmployees());
    }

    @Test
     void testGetAllEmployees_ExceptionThrownByRepository() {
        // Mock the employeeRepository.findAll method to throw an exception
        when(employeeRepository.findAll()).thenThrow(RuntimeException.class);

        // Call the method under test and verify that it throws the expected exception
        assertThrows(RuntimeException.class, () -> employeeService.getAllEmployees());
    }
    @Test
     void testGetEmployeeById_Successful() throws EmployeeNotFoundException, com.ramp.bill_managementservice.exception.InvalidFormatException {
        // Prepare test data
        Long employeeId = 123L;
        Employee employee = new Employee();
        // Set employee properties

        // Mock the employeeRepository.findById method
        when(employeeRepository.findById(employeeId)).thenReturn(Optional.of(employee));

        // Call the method under test
        EmployeeDto result = employeeService.getEmployeeById(employeeId.toString());

        // Verify the result
        assertNotNull(result);
        // Add more assertions based on your requirements
    }

    @Test
     void testGetEmployeeById_NotNumberFormatException() {
        // Prepare test data
        String invalidId = "abc";

        // Call the method under test and verify that it throws the expected exception
        assertThrows(InvalidFormatException.class, () -> employeeService.getEmployeeById(invalidId));
    }

    @Test
     void testGetEmployeeById_EmployeeNotFoundException() {
        // Prepare test data
        Long employeeId = 123L;

        // Mock the employeeRepository.findById method
        when(employeeRepository.findById(employeeId)).thenReturn(Optional.empty());

        // Call the method under test and verify that it throws the expected exception
        assertThrows(EmployeeNotFoundException.class, () -> employeeService.getEmployeeById(employeeId.toString()));
    }

}