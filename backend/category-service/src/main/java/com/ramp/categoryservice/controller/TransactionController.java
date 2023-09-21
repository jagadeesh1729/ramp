package com.ramp.categoryservice.controller;

import com.ramp.categoryservice.dto.TransactionDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category/transactions")
public class TransactionController {

    @Autowired
    private TransactionService transactionService;

    @GetMapping("/{id}")
    public ResponseEntity<TransactionDto> getTransactionById(@PathVariable Long id) {
        try {
            TransactionDto transactionDto = transactionService.getTransactionById(id);
            return ResponseEntity.ok(transactionDto);
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @GetMapping
    public ResponseEntity<List<TransactionDto>> getAllTransactions() {
            List<TransactionDto> transactionDtos = transactionService.getAllTransactions();
            return ResponseEntity.ok(transactionDtos);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteTransactionById(@PathVariable Long id) {
        try {
            transactionService.deleteTransactionById(id);
            return ResponseEntity.noContent().build();
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }
    @PatchMapping("/{id}")
    public ResponseEntity<String> updateTransaction(@PathVariable("id") Long id, @RequestBody TransactionDto transactionDto) {
        try {
            transactionDto.setId(id);
            transactionService.updateTransaction(transactionDto);
            return ResponseEntity.ok("Transaction updated successfully");
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Transaction not found");
        }
    }
}