package com.ramp.bill_managementservice.services;


import com.ramp.bill_managementservice.dto.EmployeeDto;
import com.ramp.bill_managementservice.exception.EmployeeEmptyException;
import com.ramp.bill_managementservice.exception.EmployeeNotFoundException;
import com.ramp.bill_managementservice.exception.InvalidFormatException;
import java.util.List;

public interface EmployeeService {
    List<EmployeeDto> getAllEmployees() throws EmployeeEmptyException;

    EmployeeDto getEmployeeById(String id) throws EmployeeNotFoundException, InvalidFormatException;
}
