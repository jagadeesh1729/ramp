package com.ramp.categoryservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ramp.categoryservice.dto.MerchantRuleDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.MerchantRuleService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

class MerchantRuleControllerTest {
    private MockMvc mockMvc;

    @Mock
    private MerchantRuleService merchantRuleService;

    @InjectMocks
    private MerchantRuleController merchantRuleController;

    @BeforeEach
    void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(merchantRuleController).build();
    }

    @Test
    void testGetAllMerchantRules() throws Exception {
        MerchantRuleDto merchantRule1 = new MerchantRuleDto(1, "category1", null);
        MerchantRuleDto merchantRule2 = new MerchantRuleDto(2, "category2", null);
        List<MerchantRuleDto> merchantRuleList = Arrays.asList(merchantRule1, merchantRule2);
        when(merchantRuleService.getAllMerchantRules()).thenReturn(merchantRuleList);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/category/merchantRules")
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();

        String expectedResponse = new ObjectMapper().writeValueAsString(merchantRuleList);
        String actualResponse = result.getResponse().getContentAsString();
        assertEquals(expectedResponse, actualResponse);
    }

    @Test
    void testGetMerchantRuleById() throws Exception {
        MerchantRuleDto merchantRule = new MerchantRuleDto(1, "category1", null);
        when(merchantRuleService.getMerchantRuleById(1)).thenReturn(merchantRule);

        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.get("/category/merchantRules/1")
                        .contentType(MediaType.APPLICATION_JSON_VALUE))
                .andReturn();

        String expectedResponse = new ObjectMapper().writeValueAsString(merchantRule);
        String actualResponse = result.getResponse().getContentAsString();
        assertEquals(expectedResponse, actualResponse);
    }

    @Test
    void testCreateMerchantRule() throws Exception {
        MerchantRuleDto merchantRule = new MerchantRuleDto(1, "category1", null);
        when(merchantRuleService.saveMerchantRule(any())).thenReturn(merchantRule);

        String requestBody = new ObjectMapper().writeValueAsString(merchantRule);
        MvcResult result = mockMvc.perform(MockMvcRequestBuilders.post("/category/merchantRules")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(requestBody))
                .andReturn();

        String expectedResponse = new ObjectMapper().writeValueAsString(merchantRule);
        String actualResponse = result.getResponse().getContentAsString();
        assertEquals(expectedResponse, actualResponse);
    }
    @Test
    void testGetMerchantRuleById_NotFound() throws Exception {
        when(merchantRuleService.getMerchantRuleById(anyInt())).thenThrow(new NotFoundException("MerchantRule not found"));

        mockMvc = MockMvcBuilders.standaloneSetup(merchantRuleController).build();

        mockMvc.perform(MockMvcRequestBuilders.get("/category/merchantRules/1"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }

}