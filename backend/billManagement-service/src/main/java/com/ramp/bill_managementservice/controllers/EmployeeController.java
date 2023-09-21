package com.ramp.bill_managementservice.controllers;

import com.ramp.bill_managementservice.dto.EmployeeDto;
import com.ramp.bill_managementservice.exception.EmployeeEmptyException;
import com.ramp.bill_managementservice.exception.EmployeeNotFoundException;
import com.ramp.bill_managementservice.services.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.ramp.bill_managementservice.exception.InvalidFormatException;
import java.util.List;

@RestController
@RequestMapping("/bill/employees")
@RequiredArgsConstructor
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() throws EmployeeEmptyException {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return new ResponseEntity<>(employees, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Object> getEmployeeById(@PathVariable String id) throws EmployeeNotFoundException, InvalidFormatException{
            EmployeeDto employeeDto = employeeService.getEmployeeById(id);
            return new ResponseEntity<>(employeeDto, HttpStatus.OK);
    }
}

