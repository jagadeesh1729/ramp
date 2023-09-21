package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.*;
import com.ramp.categoryservice.entity.*;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.QuickbooksCategoryRepository;
import com.ramp.categoryservice.repository.TransactionRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

class TransactionServiceImplTest {

    @Mock
    private TransactionRepository transactionRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private TransactionServiceImpl transactionService;
    @Mock
    private QuickbooksCategoryRepository quickbooksCategoryRepository;

    @BeforeEach
    void setup() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllTransactions() {
        List<Transaction> transactions = new ArrayList<>();
        transactions.add(new Transaction(1L, 10.0, LocalDate.now(), "receipt1", "memo1", null, null, null));
        transactions.add(new Transaction(2L, 20.0, LocalDate.now(), "receipt2", "memo2", null, null, null));
        when(transactionRepository.findAll()).thenReturn(transactions);

        List<TransactionDto> expectedTransactionDtos = new ArrayList<>();
        expectedTransactionDtos.add(new TransactionDto(1L, 10.0, LocalDate.now(), "receipt1", "memo1", null, null, null));
        expectedTransactionDtos.add(new TransactionDto(2L, 20.0, LocalDate.now(), "receipt2", "memo2", null, null, null));
        when(modelMapper.map(any(), any())).thenReturn(new TransactionDto());

        List<TransactionDto> actualTransactionDtos = transactionService.getAllTransactions();

        verify(transactionRepository, times(1)).findAll();
    }

    @Test
    void testGetTransactionById() {
        Long id = 1L;
        Transaction transaction = new Transaction(id, 10.0, LocalDate.now(), "receipt1", "memo1", null, null, null);
        when(transactionRepository.findById(id)).thenReturn(Optional.of(transaction));

        TransactionDto expectedTransactionDto = new TransactionDto(id, 10.0,  LocalDate.now(), "receipt1", "memo1", null, null, null);
        when(modelMapper.map(transaction, TransactionDto.class)).thenReturn(expectedTransactionDto);

        TransactionDto actualTransactionDto = transactionService.getTransactionById(id);

        assertEquals(expectedTransactionDto, actualTransactionDto);
        verify(transactionRepository, times(1)).findById(id);
    }

    @Test
    void testGetTransactionById_ResourceNotFound() {
        Long id = 1L;
        when(transactionRepository.findById(id)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFound.class, () -> transactionService.getTransactionById(id));
        verify(transactionRepository, times(1)).findById(id);
    }

    @Test
    void deleteTransactionById_shouldDeleteTransaction() {
        Transaction transaction = new Transaction();
        transaction.setId(1L);
        transaction.setAmount(100.0);
        transaction.setDate(LocalDate.now());
        transaction.setReceipt("ABCD1234");
        transaction.setMemo("Test transaction");
        when(transactionRepository.findById(1L)).thenReturn(Optional.of(transaction));

        transactionService.deleteTransactionById(1L);

        verify(transactionRepository, times(1)).delete(transaction);
    }
    @Test
    void testUpdateTransaction_Successful() {
        Long transactionId = 1L;
        Double updatedAmount = 1000.0;
        LocalDate updatedDate = LocalDate.now();
        String updatedReceipt = "123456";
        String updatedMemo = "Updated memo";
        Employee updatedEmployee = new Employee();
        QuickbooksCategory updatedCategory = new QuickbooksCategory();
        Merchant updatedMerchant = new Merchant();

        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(transactionId);
        transactionDto.setAmount(updatedAmount);
        transactionDto.setDate(updatedDate);
        transactionDto.setReceipt(updatedReceipt);
        transactionDto.setMemo(updatedMemo);
        transactionDto.setEmployee(updatedEmployee);
        transactionDto.setQuickbooksCategory(updatedCategory);
        transactionDto.setMerchant(updatedMerchant);

        Transaction existingTransaction = new Transaction();
        existingTransaction.setId(transactionId);
        when(transactionRepository.findById(transactionId)).thenReturn(Optional.of(existingTransaction));
        assertDoesNotThrow(() -> transactionService.updateTransaction(transactionDto));
        assertEquals(updatedAmount, existingTransaction.getAmount());
        assertEquals(updatedDate, existingTransaction.getDate());
        assertEquals(updatedReceipt, existingTransaction.getReceipt());
        assertEquals(updatedMemo, existingTransaction.getMemo());
        verify(transactionRepository, times(1)).save(existingTransaction);
    }
    @Test
    void testUpdateTransaction_AmountNotNull() {
        
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(1L);
        transactionDto.setAmount(100.0);

        Transaction transaction = new Transaction();
        Mockito.when(transactionRepository.findById(transactionDto.getId())).thenReturn(Optional.of(transaction));

        
        transactionService.updateTransaction(transactionDto);

        
        Mockito.verify(transactionRepository).findById(transactionDto.getId());
        Mockito.verify(transactionRepository).save(transaction);
        
    }

    @Test
    void testUpdateTransaction_DateNotNull() {
        
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(1L);
        transactionDto.setDate(LocalDate.now());

        Transaction transaction = new Transaction();
        Mockito.when(transactionRepository.findById(transactionDto.getId())).thenReturn(Optional.of(transaction));

        
        transactionService.updateTransaction(transactionDto);

        
        Mockito.verify(transactionRepository).findById(transactionDto.getId());
        Mockito.verify(transactionRepository).save(transaction);
        
    }
    @Test
    void testUpdateTransaction_ReceiptNotNull() {
        
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(1L);
        transactionDto.setReceipt("ABC123");

        Transaction transaction = new Transaction();
        Mockito.when(transactionRepository.findById(transactionDto.getId())).thenReturn(Optional.of(transaction));

        
        transactionService.updateTransaction(transactionDto);

        
        Mockito.verify(transactionRepository).findById(transactionDto.getId());
        Mockito.verify(transactionRepository).save(transaction);
        
    }

    @Test
    void testUpdateTransaction_MemoNotNull() {
        
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(1L);
        transactionDto.setMemo("Some memo");

        Transaction transaction = new Transaction();
        Mockito.when(transactionRepository.findById(transactionDto.getId())).thenReturn(Optional.of(transaction));

        
        transactionService.updateTransaction(transactionDto);

        
        Mockito.verify(transactionRepository).findById(transactionDto.getId());
        Mockito.verify(transactionRepository).save(transaction);
        
    }

    @Test
    void testUpdateTransaction_EmployeeNotNull() {
        
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(1L);
        Employee employee = new Employee();
        
        transactionDto.setEmployee(employee);

        Transaction transaction = new Transaction();
        Mockito.when(transactionRepository.findById(transactionDto.getId())).thenReturn(Optional.of(transaction));

        
        transactionService.updateTransaction(transactionDto);

        
        Mockito.verify(transactionRepository).findById(transactionDto.getId());
        Mockito.verify(transactionRepository).save(transaction);
        
    }

    @Test
    void testUpdateTransaction_QuickbooksCategoryNotNull() {
        
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(1L);
        QuickbooksCategory quickbooksCategory = new QuickbooksCategory();
        // Set properties for the quickbooksCategory
        transactionDto.setQuickbooksCategory(quickbooksCategory);

        Transaction transaction = new Transaction();
        Mockito.when(transactionRepository.findById(transactionDto.getId())).thenReturn(Optional.of(transaction));

        
        transactionService.updateTransaction(transactionDto);

        
        Mockito.verify(transactionRepository).findById(transactionDto.getId());
        Mockito.verify(transactionRepository).save(transaction);
        
    }

    @Test
    void testUpdateTransaction_MerchantNotNull() {
        
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(1L);
        Merchant merchant = new Merchant();
        // Set properties for the merchant
        transactionDto.setMerchant(merchant);

        Transaction transaction = new Transaction();
        Mockito.when(transactionRepository.findById(transactionDto.getId())).thenReturn(Optional.of(transaction));

        
        transactionService.updateTransaction(transactionDto);

        
        Mockito.verify(transactionRepository).findById(transactionDto.getId());
        Mockito.verify(transactionRepository).save(transaction);
        
    }



    @Test
    void testUpdateTransactionWithNullQuickbooksCategory() {
        TransactionDto transactionDto = new TransactionDto();

        Transaction transaction = new Transaction();
        when(transactionRepository.findById(transactionDto.getId())).thenReturn(Optional.of(transaction));

        transactionService.updateTransaction(transactionDto);

        verify(quickbooksCategoryRepository, never()).findById(anyInt());
        verify(transactionRepository, times(1)).save(transaction);
    }
    @Test
    void testUpdateTransaction_NullTransactionDto_ThrowsResourceNotFound() {
        assertThrows(ResourceNotFound.class, () -> transactionService.updateTransaction(null));
    }

    @Test
    void testUpdateTransaction_NonexistentTransactionId_ThrowsResourceNotFound() {
        Long transactionId = 1L;
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(transactionId);

        when(transactionRepository.findById(transactionId)).thenReturn(Optional.empty());

        assertThrows(ResourceNotFound.class, () -> transactionService.updateTransaction(transactionDto));

        verify(transactionRepository, never()).save(any());
    }
}