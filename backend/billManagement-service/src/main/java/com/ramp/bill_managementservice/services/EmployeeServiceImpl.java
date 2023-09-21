package com.ramp.bill_managementservice.services;

import com.ramp.bill_managementservice.dto.EmployeeDto;
import com.ramp.bill_managementservice.entity.Employee;
import com.ramp.bill_managementservice.exception.EmployeeEmptyException;
import com.ramp.bill_managementservice.exception.EmployeeNotFoundException;
import com.ramp.bill_managementservice.exception.InvalidFormatException;
import com.ramp.bill_managementservice.mapper.EmployeeModalMapper;
import com.ramp.bill_managementservice.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@Transactional
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    private EmployeeModalMapper modelMapper;

    public EmployeeServiceImpl() {
        modelMapper = new EmployeeModalMapper();
    }

    public List<EmployeeDto> getAllEmployees() throws EmployeeEmptyException {
        List<Employee> employees = employeeRepository.findAll();

        if (employees.isEmpty()) {
            throw new EmployeeEmptyException("No employees found.");
        }

        return employees.stream()
                .map(employee -> modelMapper.entityToDto(employee))
                .collect(Collectors.toList());
    }


    public EmployeeDto getEmployeeById(String id) throws EmployeeNotFoundException, InvalidFormatException {
        Long employeeId;
        try {
            employeeId = Long.parseLong(id);
        } catch (Exception e) {
            throw new InvalidFormatException("Invalid input: ID must be a valid numeric value.");
        }

        Optional<Employee> optionalEmployee = employeeRepository.findById(employeeId);

        if (optionalEmployee.isEmpty()) {
            throw new EmployeeNotFoundException("Employee not found with ID: " + employeeId);
        }

        Employee employee = optionalEmployee.get();
        return modelMapper.entityToDto(employee);
    }
}

