package com.ramp.bill_managementservice.services;

import com.ramp.bill_managementservice.dto.PaymentDto;
import com.ramp.bill_managementservice.exception.InvalidFormatException;

import java.util.List;

public interface PaymentServices {
    public List<PaymentDto> getAllPayments();

    public PaymentDto addSinglePayment(PaymentDto paymentDto);

    public  PaymentDto getOnePayment(String id) throws InvalidFormatException;

    public String deletePaymentWithId(String id) throws InvalidFormatException;

    PaymentDto updatePaymentById(PaymentDto paymentDto, Long id);
}
