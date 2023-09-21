package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.TransactionDto;
import com.ramp.categoryservice.entity.Employee;
import com.ramp.categoryservice.entity.Merchant;
import com.ramp.categoryservice.entity.QuickbooksCategory;
import com.ramp.categoryservice.entity.Transaction;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.QuickbooksCategoryRepository;
import com.ramp.categoryservice.repository.TransactionRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;
    @Autowired
    private QuickbooksCategoryRepository quickbooksCategoryRepository;

    private ModelMapper modelMapper;
    public TransactionServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public List<TransactionDto> getAllTransactions() {
        List<Transaction> transactions = transactionRepository.findAll();
        return transactions.stream()
                .map(transaction -> modelMapper.map(transaction, TransactionDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public TransactionDto getTransactionById(Long id) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Transaction not found id: " + id));
        return modelMapper.map(transaction, TransactionDto.class);
    }

    @Override
    public void deleteTransactionById(Long id) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Transaction not found with id: " + id));
        transactionRepository.delete(transaction);
    }
    @Override
    public void updateTransaction(TransactionDto transactionDto) {
        if (transactionDto == null) {
            throw new ResourceNotFound("Transaction data is not correct");
        }

        Transaction transaction = transactionRepository.findById(transactionDto.getId())
                .orElseThrow(() -> new ResourceNotFound("Transaction not found with id: " + transactionDto.getId()));

        if (transactionDto.getAmount() > 0) {
            transaction.setAmount(transactionDto.getAmount());
        }

        if (transactionDto.getDate() != null) {
            transaction.setDate(transactionDto.getDate());
        }

        if (transactionDto.getReceipt() != null) {
            transaction.setReceipt(transactionDto.getReceipt());
        }

        if (transactionDto.getMemo() != null) {
            transaction.setMemo(transactionDto.getMemo());
        }

        if (transactionDto.getEmployee() != null) {
            Employee employee = modelMapper.map(transactionDto.getEmployee(), Employee.class);
            transaction.setEmployee(employee);
        }

        if (transactionDto.getQuickbooksCategory() != null) {
            QuickbooksCategory category = modelMapper.map(transactionDto.getQuickbooksCategory(), QuickbooksCategory.class);
            transaction.setQuickbooksCategory(category);
        }

        if (transactionDto.getMerchant() != null) {
            Merchant merchant = modelMapper.map(transactionDto.getMerchant(), Merchant.class);
            transaction.setMerchant(merchant);
        }
        transactionRepository.save(transaction);
    }
}