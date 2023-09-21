package com.ramp.categoryservice.controller;

import com.ramp.categoryservice.dto.MerchantDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.MerchantService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.hamcrest.Matchers.hasSize;
import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class MerchantControllerTest {

    private MockMvc mockMvc;

    @Mock
    private MerchantService merchantService;

    @InjectMocks
    private MerchantController merchantController;

    @BeforeEach
   void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(merchantController).build();
    }


    @Test
   void testGetAllMerchants() throws Exception {
        MerchantDto merchant1 = new MerchantDto(1, "Merchant1", "Description1");
        MerchantDto merchant2 = new MerchantDto(2, "Merchant2", "Description2");
        List<MerchantDto> merchants = Arrays.asList(merchant1, merchant2);
        when(merchantService.findAll()).thenReturn(merchants);

        mockMvc.perform(get("/category/merchants"))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$", hasSize(2)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Merchant1")))
                .andExpect(jsonPath("$[0].description", is("Description1")))
                .andExpect(jsonPath("$[1].id", is(2)))
                .andExpect(jsonPath("$[1].name", is("Merchant2")))
                .andExpect(jsonPath("$[1].description", is("Description2")));
    }

    @Test
   void testGetMerchantById() throws Exception {
        int id = 1;
        MerchantDto merchant = new MerchantDto(id, "Merchant1", "Description1");
        when(merchantService.findById(id)).thenReturn(merchant);

        mockMvc.perform(get("/category/merchants/{id}", id))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("Merchant1")))
                .andExpect(jsonPath("$.description", is("Description1")));
    }
    @Test
    void testGetMerchantById_InvalidId() throws Exception {
        when(merchantService.findById(anyInt())).thenThrow(new NotFoundException("Merchant not found"));

        mockMvc = MockMvcBuilders.standaloneSetup(merchantController).build();

        mockMvc.perform(MockMvcRequestBuilders.get("/category/merchants/1"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }

}