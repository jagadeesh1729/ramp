package com.ramp.bill_managementservice.exception;

import com.fasterxml.jackson.databind.exc.InvalidFormatException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

@RestControllerAdvice
public class ExceptionHandlers {
    @ExceptionHandler(EmployeeNotFoundException.class)
    public ResponseEntity<ErrorResponse> handleEmployeeNotFound(EmployeeNotFoundException employeeNotFoundException) {
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setTimeStamp(System.currentTimeMillis());
        errorResponse.setMessage(employeeNotFoundException.getMessage());
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }
    @ExceptionHandler(InvalidFormatException.class)
    public ResponseEntity<ErrorResponse> handleInvalidExceptionNumber(InvalidFormatException notNumberFormatException) {
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setTimeStamp(System.currentTimeMillis());
        errorResponse.setMessage(notNumberFormatException.getMessage());
        errorResponse.setStatus(HttpStatus.FORBIDDEN.value());
        return ResponseEntity.status(HttpStatus.FORBIDDEN).body(errorResponse);
    }

    @ExceptionHandler(ManagerCreationException.class)
    public ResponseEntity<ErrorResponse> handleManagerCreationException(ManagerCreationException managerCreationException) {
        ErrorResponse errorResponse = new ErrorResponse();
        errorResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        errorResponse.setMessage(managerCreationException.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
    }
    @ExceptionHandler(ManagerNotFound.class)
    public ResponseEntity<ErrorResponse> handleManagerNotFound(ManagerNotFound managerNotFound){
        ErrorResponse errorResponse=new ErrorResponse();
        errorResponse.setTimeStamp(System.currentTimeMillis());
        errorResponse.setMessage(managerNotFound.getMessage());
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }
    @ExceptionHandler(PaymentNotFoundException.class)
    public ResponseEntity<ErrorResponse> handlePaymentNotFound(PaymentNotFoundException paymentNotFoundException){
        ErrorResponse errorResponse=new ErrorResponse();
        errorResponse.setTimeStamp(System.currentTimeMillis());
        errorResponse.setMessage(paymentNotFoundException.getMessage());
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }
    @ExceptionHandler(PaymentEmptyException.class)
    public ResponseEntity<ErrorResponse> handlePaymentNotFoundEmpty(PaymentEmptyException paymentEmptyException){
        ErrorResponse errorResponse=new ErrorResponse();
        errorResponse.setTimeStamp(System.currentTimeMillis());
        errorResponse.setMessage(paymentEmptyException.getMessage());
        errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(errorResponse);
    }
    @ExceptionHandler(InvalidPaymentDataException.class)
    public ResponseEntity<ErrorResponse> handlePaymentNotFound(InvalidPaymentDataException invalidPaymentDataException){
        ErrorResponse errorResponse=new ErrorResponse();
        errorResponse.setTimeStamp(System.currentTimeMillis());
        errorResponse.setMessage(invalidPaymentDataException.getMessage());
        errorResponse.setStatus(HttpStatus.INTERNAL_SERVER_ERROR.value());
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
    }

    @ExceptionHandler(EmployeeEmptyException.class)
    public ResponseEntity<ErrorResponse> handleEmptyNotFound(EmployeeEmptyException employeeEmptyException){
        ErrorResponse errorResponse=new ErrorResponse();
        errorResponse.setMessage(employeeEmptyException.getMessage());
        errorResponse.setTimeStamp(System.currentTimeMillis());
        errorResponse.setStatus(HttpStatus.NO_CONTENT.value());
        return ResponseEntity.status(HttpStatus.NO_CONTENT).body(errorResponse);
    }
}

