package com.ramp.categoryservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ramp.categoryservice.dto.TransactionDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.TransactionService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class TransactionControllerTest {

    private MockMvc mockMvc;

    @InjectMocks
    private TransactionController transactionController;

    @Mock
    private TransactionService transactionService;

    private final ObjectMapper objectMapper = new ObjectMapper();
    @Test
    void testGetTransactionById_ValidId_ReturnsTransactionDto() {
        Long id = 1L;
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(id);
        transactionDto.setAmount(100.0);
        transactionDto.setDate(LocalDate.now());
        transactionDto.setReceipt("receipt");
        transactionDto.setMemo("memo");

        when(transactionService.getTransactionById(id)).thenReturn(transactionDto);

        ResponseEntity<TransactionDto> responseEntity = transactionController.getTransactionById(id);

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(transactionDto, responseEntity.getBody());
    }

    @Test
    void testGetTransactionById_InvalidId_ReturnsNotFound() {
        Long id = 1L;
        when(transactionService.getTransactionById(id)).thenThrow(NotFoundException.class);

        ResponseEntity<TransactionDto> responseEntity = transactionController.getTransactionById(id);

        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals(null, responseEntity.getBody());
    }

    @Test
    void testGetAllTransactions_ReturnsListOfTransactionDto() {
        TransactionDto transactionDto1 = new TransactionDto();
        transactionDto1.setId(1L);
        transactionDto1.setAmount(100.0);
        transactionDto1.setDate(LocalDate.now());
        transactionDto1.setReceipt("receipt1");
        transactionDto1.setMemo("memo1");

        TransactionDto transactionDto2 = new TransactionDto();
        transactionDto2.setId(2L);
        transactionDto2.setAmount(200.0);
        transactionDto2.setDate(LocalDate.now());
        transactionDto2.setReceipt("receipt2");
        transactionDto2.setMemo("memo2");

        List<TransactionDto> transactionDtos = new ArrayList<>();
        transactionDtos.add(transactionDto1);
        transactionDtos.add(transactionDto2);

        when(transactionService.getAllTransactions()).thenReturn(transactionDtos);

        ResponseEntity<List<TransactionDto>> responseEntity = transactionController.getAllTransactions();

        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals(transactionDtos, responseEntity.getBody());
    }

    @Test
    void testDeleteTransactionById() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(transactionController).build();

        mockMvc.perform(MockMvcRequestBuilders.delete("/category/transactions/1"))
                .andExpect(MockMvcResultMatchers.status().isNoContent())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    void testGetTransactionById_NotFound() throws Exception {
        when(transactionService.getTransactionById(1L)).thenThrow(new NotFoundException("Transaction not found"));

        mockMvc = MockMvcBuilders.standaloneSetup(transactionController).build();

        mockMvc.perform(MockMvcRequestBuilders.get("/category/transactions/1"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }
    @Test
    void testDeleteTransactionById_NotFound() throws Exception {
        doThrow(new NotFoundException("Transaction not found")).when(transactionService).deleteTransactionById(1L);

        mockMvc = MockMvcBuilders.standaloneSetup(transactionController).build();

        mockMvc.perform(MockMvcRequestBuilders.delete("/category/transactions/1"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }

    @Test
    void testDeleteTransactionById_Successful() throws Exception {
        mockMvc = MockMvcBuilders.standaloneSetup(transactionController).build();

        mockMvc.perform(MockMvcRequestBuilders.delete("/category/transactions/1"))
                .andExpect(MockMvcResultMatchers.status().isNoContent())
                .andDo(MockMvcResultHandlers.print());

        verify(transactionService, times(1)).deleteTransactionById(1L);
    }
    @Test
    void testUpdateTransaction_ValidData_ReturnsOk() {
        Long id = 1L;
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(id);
        transactionDto.setAmount(100.0);
        transactionDto.setDate(LocalDate.now());
        transactionDto.setReceipt("receipt");
        transactionDto.setMemo("memo");

        ResponseEntity<String> responseEntity = transactionController.updateTransaction(id, transactionDto);

        verify(transactionService, times(1)).updateTransaction(transactionDto);
        assertEquals(HttpStatus.OK, responseEntity.getStatusCode());
        assertEquals("Transaction updated successfully", responseEntity.getBody());
    }
    @Test
    void testUpdateTransaction_InvalidData_ReturnsNotFound() {
        Long id = 1L;
        TransactionDto transactionDto = new TransactionDto();
        transactionDto.setId(id);
        transactionDto.setAmount(100.0);
        transactionDto.setDate(LocalDate.now());
        transactionDto.setReceipt("receipt");
        transactionDto.setMemo("memo");

        doThrow(NotFoundException.class).when(transactionService).updateTransaction(transactionDto);

        ResponseEntity<String> responseEntity = transactionController.updateTransaction(id, transactionDto);

        verify(transactionService, times(1)).updateTransaction(transactionDto);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("Transaction not found", responseEntity.getBody());
    }


}
