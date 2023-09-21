package com.ramp.bill_managementservice.mapper;

import com.ramp.bill_managementservice.dto.ManagerDto;
import com.ramp.bill_managementservice.entity.Manager;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class ManagerModalMapper {
    private final ModelMapper mapper=new ModelMapper();

    public Manager dtoToEntity(ManagerDto managerDto){
        return mapper.map(managerDto,Manager.class);
    }

    public  ManagerDto entityToDto(Manager manager){
        return mapper.map(manager,ManagerDto.class);
    }
}

