package com.ramp.bill_managementservice.exception;

public class InvalidPaymentDataException extends RuntimeException{
    public InvalidPaymentDataException(String message) {
        super(message);
    }
}

