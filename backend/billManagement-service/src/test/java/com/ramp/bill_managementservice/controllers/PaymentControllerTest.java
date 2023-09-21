package com.ramp.bill_managementservice.controllers;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.bouncycastle.math.raw.Nat.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.springframework.http.RequestEntity.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.result.StatusResultMatchersExtensionsKt.isEqualTo;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import com.ramp.bill_managementservice.exception.InvalidFormatException;
import com.ramp.bill_managementservice.mapper.PaymentModalMapper;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import com.ramp.bill_managementservice.dto.PaymentDto;
import com.ramp.bill_managementservice.services.PaymentServices;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import static org.hamcrest.Matchers.hasItems;


 class  PaymentControllerTest {

    private MockMvc mockMvc;

    @Mock
    private PaymentServices paymentServices;
    @InjectMocks
    private PaymentController paymentController;

    @Autowired
    private PaymentModalMapper paymentModalMapper;
    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(paymentController).build();
    }
    @Test
     void testDisplayAllPayments() throws Exception {
        PaymentDto payment1 = new PaymentDto();
        payment1.setId(1L);
        payment1.setAmount(100);
        payment1.setDueDate(LocalDate.parse("2023-05-31"));
        payment1.setInvoiceDate(LocalDate.parse("2023-05-15"));
        payment1.setInvoiceNo("INV-001");
        payment1.setPaymentDate(LocalDate.parse("2023-05-16"));
        payment1.setAccountNo("ACC-001");

        PaymentDto payment2 = new PaymentDto();
        payment2.setId(2L);
        payment2.setAmount(200);
        payment2.setDueDate(LocalDate.parse("2023-06-30"));
        payment2.setInvoiceDate(LocalDate.parse("2023-06-15"));
        payment2.setInvoiceNo("INV-002");
        payment2.setPaymentDate(LocalDate.parse("2023-06-16"));
        payment2.setAccountNo("ACC-002");

        List<PaymentDto> payments = Arrays.asList(payment1, payment2);

        when(paymentServices.getAllPayments()).thenReturn(payments);

        DateTimeFormatter dateFormatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        String actualDueDate = payment1.getDueDate().format(dateFormatter);
        mockMvc.perform(get("/bill/payments/")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id").value(payment1.getId().intValue()))
                .andExpect(jsonPath("$[0].amount").value(payment1.getAmount()))
                .andExpect(jsonPath("$[0].invoiceDate").value(hasItems(2023, 5, 15)))
                .andExpect(jsonPath("$[0].invoiceNo").value(payment1.getInvoiceNo()))
                .andExpect(jsonPath("$[0].paymentDate").value(hasItems(2023, 5, 16)))
                .andExpect(jsonPath("$[0].accountNo").value(payment1.getAccountNo()))
                .andExpect(jsonPath("$[1].id").value(payment2.getId().intValue()))
                .andExpect(jsonPath("$[1].amount").value(payment2.getAmount()))
                .andExpect(jsonPath("$[1].invoiceDate").value(hasItems(2023, 6, 15)))
                .andExpect(jsonPath("$[1].invoiceNo").value(payment2.getInvoiceNo()))
                .andExpect(jsonPath("$[1].paymentDate").value(hasItems(2023, 6, 16)))
                .andExpect(jsonPath("$[1].accountNo").value(payment2.getAccountNo()));
    }
    @Test
     void testDeletePayment() throws Exception {
        PaymentDto payment1 = new PaymentDto();
        payment1.setId(1L);
        payment1.setAmount(100);
        payment1.setDueDate(LocalDate.parse("2023-05-31"));
        payment1.setInvoiceDate(LocalDate.parse("2023-05-15"));
        payment1.setInvoiceNo("INV-001");
        payment1.setPaymentDate(LocalDate.parse("2023-05-16"));
        payment1.setAccountNo("ACC-001");

        Mockito.when(paymentServices.deletePaymentWithId("1")).thenReturn("Payment with id1 is deleted");

        mockMvc.perform(MockMvcRequestBuilders.delete("/bill/payments/1"))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(MockMvcResultMatchers.content().string("Payment deleted successfully"));

        Mockito.verify(paymentServices, times(1)).deletePaymentWithId("1");
    }
    @Test
     void testUpdatePaymentById() {
        // Prepare test data
        PaymentDto paymentDto = new PaymentDto();
        paymentDto.setId(1L);
        // ... set other properties of paymentDto

        long id = 1;

        PaymentDto updatedPaymentDto = new PaymentDto();
        // ... set properties of updatedPaymentDto after updating

        // Mock the paymentServices.updatePaymentById method
        when(paymentServices.updatePaymentById(paymentDto, id)).thenReturn(updatedPaymentDto);

        // Invoke the updateThePaymentById method
        ResponseEntity<PaymentDto> responseEntity = (ResponseEntity<PaymentDto>) paymentController.updateThePaymentById(paymentDto, String.valueOf(id));

        // Verify the result
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isEqualTo(updatedPaymentDto);

        verify(paymentServices, times(1)).updatePaymentById(paymentDto, id);
    }
    @Test
     void testDisplaySinglePayment_Success() throws InvalidFormatException{
        // Prepare test data
        long id = 1L;
        PaymentDto paymentDto = new PaymentDto();
        // ... set properties of paymentDto

        // Mock the paymentServices.getOnePayment method
        when(paymentServices.getOnePayment(String.valueOf(id))).thenReturn(paymentDto);

        // Invoke the displaySinglePayment method
        ResponseEntity<PaymentDto> responseEntity = (ResponseEntity<PaymentDto>) paymentController.displaySinglePayment(String.valueOf(id));

        // Verify the result
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
        assertThat(responseEntity.getBody()).isEqualTo(paymentDto);
        verify(paymentServices, times(1)).getOnePayment(String.valueOf(id));
    }
    @Test
     void testAddPayments() {
        // Prepare test data
        PaymentDto paymentDto = new PaymentDto();
        // ... set properties of paymentDto

        PaymentDto addedPaymentDto = new PaymentDto();
        // ... set properties of addedPaymentDto after adding

        // Mock the paymentServices.addSinglePayment method
        when(paymentServices.addSinglePayment(paymentDto)).thenReturn(addedPaymentDto);

        // Invoke the addPayments method
        ResponseEntity<PaymentDto> responseEntity = (ResponseEntity<PaymentDto>) paymentController.addPayments(paymentDto);

        // Verify the result
        assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.ACCEPTED);
        assertThat(responseEntity.getBody()).isEqualTo(addedPaymentDto);

        verify(paymentServices, times(1)).addSinglePayment(paymentDto);
    }

}