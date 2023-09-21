package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.TransactionDto;

import java.util.List;

public interface TransactionService {
    List<TransactionDto> getAllTransactions();
    TransactionDto getTransactionById(Long id);
    void updateTransaction(TransactionDto transactionDto);
    void deleteTransactionById(Long id);
}