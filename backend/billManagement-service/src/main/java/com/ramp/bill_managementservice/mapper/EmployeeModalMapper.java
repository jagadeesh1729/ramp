package com.ramp.bill_managementservice.mapper;

import com.ramp.bill_managementservice.dto.EmployeeDto;
import com.ramp.bill_managementservice.entity.Employee;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class EmployeeModalMapper {
    private final ModelMapper mapper=new ModelMapper();

    public Employee dtoToEntity(EmployeeDto employeeDto){
        return mapper.map(employeeDto,Employee.class);
    }

    public EmployeeDto entityToDto(Employee employee){
        return mapper.map(employee,EmployeeDto.class);
    }
}

