package com.ramp.categoryservice.controller;

import com.ramp.categoryservice.dto.QuickbooksCategoryDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.QuickbooksCategoryService;
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

import static org.mockito.ArgumentMatchers.anyInt;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

class QuickbooksCategoryControllerTest {

    @Mock
    private QuickbooksCategoryService quickbooksCategoryService;

    private MockMvc mockMvc;
    @InjectMocks
    private QuickbooksCategoryController controller;

    @BeforeEach
    void setup() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    void testGetAllQuickbooksCategories() throws Exception {
        List<QuickbooksCategoryDto> categories = Arrays.asList(
                new QuickbooksCategoryDto(1, "category1"),
                new QuickbooksCategoryDto(2, "category2")
        );

        when(quickbooksCategoryService.getAllQuickbooksCategories()).thenReturn(categories);

        mockMvc.perform(get("/category/quickbooksCategories")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("category1"))
                .andExpect(jsonPath("$[1].id").value(2))
                .andExpect(jsonPath("$[1].name").value("category2"));
    }

    @Test
    void testGetQuickbooksCategoryById() throws Exception {
        QuickbooksCategoryDto category = new QuickbooksCategoryDto(1, "category1");

        when(quickbooksCategoryService.getQuickbooksCategoryById(anyInt())).thenReturn(category);

        mockMvc.perform(get("/category/quickbooksCategories/1")
                        .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(content().contentType(MediaType.APPLICATION_JSON))
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("category1"));
    }
    @Test
    void testGetQuickbooksCategoryById_NotFound() throws Exception {
        when(quickbooksCategoryService.getQuickbooksCategoryById(anyInt())).thenThrow(new NotFoundException("Category not found"));

        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();

        mockMvc.perform(MockMvcRequestBuilders.get("/category/quickbooksCategories/1"))
                .andExpect(MockMvcResultMatchers.status().isNotFound())
                .andDo(MockMvcResultHandlers.print());
    }

}

