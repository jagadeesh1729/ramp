package com.ramp.bill_managementservice.mapper;

import com.ramp.bill_managementservice.dto.PaymentDto;
import com.ramp.bill_managementservice.entity.Payment;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Component;

@Component
public class PaymentModalMapper {
    private final ModelMapper mapper=new ModelMapper();

    public Payment dtoToEntity(PaymentDto PaymentDto){
        return mapper.map(PaymentDto,Payment.class);
    }
    public PaymentDto entityToDto(Payment Payment){
        return mapper.map(Payment,PaymentDto.class);
    }
}

