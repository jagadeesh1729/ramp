package com.ramp.bill_managementservice.controllers;

import com.ramp.bill_managementservice.exception.InvalidFormatException;
import com.ramp.bill_managementservice.dto.PaymentDto;
import com.ramp.bill_managementservice.exception.PaymentNotFoundException;
import com.ramp.bill_managementservice.services.PaymentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PatchMapping;

import java.util.List;

@RestController
@RequestMapping("/bill/payments")
public class PaymentController {
    @Autowired
    public PaymentServices paymentServices;
    @GetMapping
    public ResponseEntity<List<PaymentDto>> displayAllPayments() throws PaymentNotFoundException {
        List<PaymentDto> payments = paymentServices.getAllPayments();
        return new ResponseEntity<>(payments, HttpStatus.OK);
    }
    @PostMapping
    public ResponseEntity<PaymentDto> addPayments(@RequestBody PaymentDto paymentDto) {
        PaymentDto payment = paymentServices.addSinglePayment(paymentDto);
        return ResponseEntity.status(HttpStatus.ACCEPTED).body(payment);
    }
    @GetMapping("/{id}")
    public ResponseEntity<PaymentDto> displaySinglePayment(@PathVariable String id) throws InvalidFormatException{
        PaymentDto payment = paymentServices.getOnePayment(id);
        return new ResponseEntity<>(payment, HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePayment(@PathVariable String id) throws InvalidFormatException {
            paymentServices.deletePaymentWithId(id);
            return new ResponseEntity<>("Payment deleted successfully", HttpStatus.OK);
    }
    @PatchMapping("/{id}")
    public ResponseEntity<PaymentDto> updateThePaymentById(@RequestBody PaymentDto paymentDto, @PathVariable String id) throws PaymentNotFoundException {
        Long paymentId = Long.parseLong(id);
        PaymentDto updatedPaymentDto = paymentServices.updatePaymentById(paymentDto, paymentId);
        return ResponseEntity.ok(updatedPaymentDto);
    }
}
