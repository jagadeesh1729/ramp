package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.EmployeeDto;
import com.ramp.categoryservice.entity.Employee;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.EmployeeRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.time.LocalDate;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
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
    void testGetAllEmployees() {
        Employee employee1 = new Employee(1L, "John Smith", LocalDate.of(1990, 1, 1), "Software Engineer");
        Employee employee2 = new Employee(2L, "Jane Doe", LocalDate.of(1995, 6, 30), "Product Manager");
        List<Employee> employees = Arrays.asList(employee1, employee2);
        when(employeeRepository.findAll()).thenReturn(employees);

        EmployeeDto employeeDto1 = new EmployeeDto(1L, "John Smith", LocalDate.of(1990, 1, 1), "Software Engineer");
        EmployeeDto employeeDto2 = new EmployeeDto(2L, "Jane Doe", LocalDate.of(1995, 6, 30), "Product Manager");
        List<EmployeeDto> expectedEmployeeDtos = Arrays.asList(employeeDto1, employeeDto2);
        when(modelMapper.map(employee1, EmployeeDto.class)).thenReturn(employeeDto1);
        when(modelMapper.map(employee2, EmployeeDto.class)).thenReturn(employeeDto2);

        List<EmployeeDto> actualEmployeeDtos = employeeService.getAllEmployees();

        assertEquals(expectedEmployeeDtos, actualEmployeeDtos);
    }

    @Test
    void testGetEmployeeById() {
        long employeeId = 1L;
        Employee employee = new Employee(employeeId, "John Smith", LocalDate.of(1990, 1, 1), "Software Engineer");
        when(employeeRepository.findById(employeeId)).thenReturn(Optional.of(employee));

        EmployeeDto expectedEmployeeDto = new EmployeeDto(employeeId, "John Smith", LocalDate.of(1990, 1, 1), "Software Engineer");
        when(modelMapper.map(employee, EmployeeDto.class)).thenReturn(expectedEmployeeDto);

        EmployeeDto actualEmployeeDto = employeeService.getEmployeeById(employeeId);

        assertEquals(expectedEmployeeDto, actualEmployeeDto);
    }

    @Test
    void testGetEmployeeByIdNotFound() {
        long employeeId = 1L;
        when(employeeRepository.findById(employeeId)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFound.class, () -> {
            employeeService.getEmployeeById(employeeId);
        });
    }
}
