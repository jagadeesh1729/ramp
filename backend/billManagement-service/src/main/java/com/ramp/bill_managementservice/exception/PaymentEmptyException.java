package com.ramp.bill_managementservice.exception;

public class PaymentEmptyException extends RuntimeException{
    public PaymentEmptyException(String message) {
        super(message);
    }
}


