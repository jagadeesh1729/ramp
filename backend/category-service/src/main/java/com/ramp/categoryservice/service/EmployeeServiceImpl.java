package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.EmployeeDto;
import com.ramp.categoryservice.entity.Employee;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.EmployeeRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    private ModelMapper modelMapper;

    public EmployeeServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        return employees.stream()
                .map(employee -> modelMapper.map(employee, EmployeeDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDto getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Employee not found with id " + id));
        return modelMapper.map(employee, EmployeeDto.class);
    }

}