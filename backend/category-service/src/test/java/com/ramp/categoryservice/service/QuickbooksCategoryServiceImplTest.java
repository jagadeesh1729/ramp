package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.QuickbooksCategoryDto;
import com.ramp.categoryservice.entity.QuickbooksCategory;
import com.ramp.categoryservice.repository.QuickbooksCategoryRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class QuickbooksCategoryServiceImplTest {

    @Mock
    private QuickbooksCategoryRepository quickbooksCategoryRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private QuickbooksCategoryServiceImpl quickbooksCategoryService;

    private List<QuickbooksCategory> quickbooksCategories;

    private QuickbooksCategoryDto quickbooksCategoryDto;

    private QuickbooksCategory quickbooksCategory;

    @BeforeEach
    void setUp() {
        quickbooksCategories = new ArrayList<>();
        quickbooksCategory = new QuickbooksCategory();
        quickbooksCategory.setId(1);
        quickbooksCategory.setName("Test Quickbooks Category");
        quickbooksCategories.add(quickbooksCategory);

        quickbooksCategoryDto = new QuickbooksCategoryDto();
        quickbooksCategoryDto.setId(1);
        quickbooksCategoryDto.setName("Test Quickbooks Category");
    }

    @Test
    void shouldReturnAllQuickbooksCategories() {
        when(quickbooksCategoryRepository.findAll()).thenReturn(quickbooksCategories);
        when(modelMapper.map(any(), any())).thenReturn(quickbooksCategoryDto);

        List<QuickbooksCategoryDto> result = quickbooksCategoryService.getAllQuickbooksCategories();

        assertThat(result).hasSize(1);
        assertThat(result.get(0).getName()).isEqualTo("Test Quickbooks Category");
        verify(quickbooksCategoryRepository, times(1)).findAll();
        verify(modelMapper, times(1)).map(any(), any());
    }

    @Test
    void shouldReturnQuickbooksCategoryById() {
        when(quickbooksCategoryRepository.findById(anyInt())).thenReturn(Optional.of(quickbooksCategory));
        when(modelMapper.map(any(), any())).thenReturn(quickbooksCategoryDto);

        QuickbooksCategoryDto result = quickbooksCategoryService.getQuickbooksCategoryById(1);

        assertThat(result.getName()).isEqualTo("Test Quickbooks Category");
        verify(quickbooksCategoryRepository, times(1)).findById(anyInt());
        verify(modelMapper, times(1)).map(any(), any());
    }
}