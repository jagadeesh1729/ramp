package com.ramp.categoryservice.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.ramp.categoryservice.dto.RampCategoryDto;
import com.ramp.categoryservice.dto.TransactionDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.service.RampCategoryService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import org.mockito.MockitoAnnotations;
import org.springframework.http.MediaType;
import static org.hamcrest.Matchers.*;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;
import static org.mockito.Mockito.times;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

class RampCategoryControllerTest {

    private MockMvc mockMvc;

    @Mock
    private RampCategoryService rampCategoryService;

    @InjectMocks
    private RampCategoryController rampCategoryController;

    @BeforeEach
    void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(rampCategoryController).build();
    }

    @Test
    void testGetAllRampCategories() throws Exception {
        List<RampCategoryDto> rampCategoryDtos = new ArrayList<>();
        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        rampCategoryDto.setId(1);
        rampCategoryDto.setName("Test");
        rampCategoryDtos.add(rampCategoryDto);

        Mockito.when(rampCategoryService.getAllRampCategories()).thenReturn(rampCategoryDtos);

        mockMvc.perform(get("/category/rampCategories"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$", hasSize(1)))
                .andExpect(jsonPath("$[0].id", is(1)))
                .andExpect(jsonPath("$[0].name", is("Test")));

        verify(rampCategoryService, Mockito.times(1)).getAllRampCategories();
        Mockito.verifyNoMoreInteractions(rampCategoryService);
    }

    @Test
    void testGetRampCategoryById() throws Exception {
        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        rampCategoryDto.setId(1);
        rampCategoryDto.setName("Test");

        Mockito.when(rampCategoryService.getRampCategoryById(1)).thenReturn(rampCategoryDto);

        mockMvc.perform(get("/category/rampCategories/1"))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("Test")));

        verify(rampCategoryService, Mockito.times(1)).getRampCategoryById(1);
        Mockito.verifyNoMoreInteractions(rampCategoryService);
    }

    @Test
    void testSaveRampCategory() throws Exception {
        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        rampCategoryDto.setName("Test");

        RampCategoryDto savedRampCategoryDto = new RampCategoryDto();
        savedRampCategoryDto.setId(1);
        savedRampCategoryDto.setName("Test");

        Mockito.when(rampCategoryService.saveRampCategory(rampCategoryDto)).thenReturn(savedRampCategoryDto);

        mockMvc.perform(post("/category/rampCategories")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content("{ \"name\": \"Test\" }"))
                .andExpect(status().isCreated())
                .andExpect(jsonPath("$.id", is(1)))
                .andExpect(jsonPath("$.name", is("Test")));

        verify(rampCategoryService, Mockito.times(1)).saveRampCategory(rampCategoryDto);
        Mockito.verifyNoMoreInteractions(rampCategoryService);
    }
    @Test
    void testUpdateRampCategory() throws Exception {
        RampCategoryDto updatedRampCategoryDto = new RampCategoryDto();
        updatedRampCategoryDto.setName("Updated Category Name");

        RampCategoryDto originalRampCategoryDto = new RampCategoryDto();
        originalRampCategoryDto.setId(1);
        originalRampCategoryDto.setName("Original Category Name");
        when(rampCategoryService.getRampCategoryById(1)).thenReturn(originalRampCategoryDto);
        when(rampCategoryService.updateRampCategory(1, updatedRampCategoryDto)).thenReturn(updatedRampCategoryDto);

        mockMvc.perform(patch("/category/rampCategories/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(updatedRampCategoryDto)))
                .andExpect(status().isOk());

        //verify(rampCategoryService).updateRampCategory(1, updatedRampCategoryDto);
    }
    @Test
    void testGetRampCategoryById_NotFound() throws Exception {
        when(rampCategoryService.getRampCategoryById(anyInt())).thenThrow(new NotFoundException("RampCategory not found"));

        mockMvc = MockMvcBuilders.standaloneSetup(rampCategoryController).build();

        mockMvc.perform(MockMvcRequestBuilders.get("/category/rampCategories/1"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }
    @Test
    void testUpdateRampCategoryNotFound() throws Exception {
        when(rampCategoryService.updateRampCategory(anyInt(), any(RampCategoryDto.class)))
                .thenThrow(new ResourceNotFound("Ramp category not found"));

        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        rampCategoryDto.setName("Updated Category");

        mockMvc.perform(patch("/category/rampCategories/1")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(new ObjectMapper().writeValueAsString(rampCategoryDto)))
                .andExpect(status().isNotFound())
                .andExpect(jsonPath("$").doesNotExist());

    }
    @Test
    void testUpdateRampCategoryNotFound_ReturnsNotFound() {
        int id = 1;
        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        rampCategoryDto.setId(id);
        rampCategoryDto.setName("ramp1");

        doThrow(NotFoundException.class).when(rampCategoryService).updateRampCategory(1, rampCategoryDto);

        ResponseEntity<String> responseEntity = rampCategoryController.updateRampCategory(id, rampCategoryDto);

        verify(rampCategoryService, times(1)).updateRampCategory(1, rampCategoryDto);
        assertEquals(HttpStatus.NOT_FOUND, responseEntity.getStatusCode());
        assertEquals("not found", responseEntity.getBody());
    }
}