package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.QuickbooksCategoryDto;
import com.ramp.categoryservice.dto.RampCategoryDto;
import com.ramp.categoryservice.entity.QuickbooksCategory;
import com.ramp.categoryservice.entity.RampCategory;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.QuickbooksCategoryRepository;
import com.ramp.categoryservice.repository.RampCategoryRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;
import org.mockito.junit.jupiter.MockitoExtension;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class RampCategoryServiceImplTest {
    @InjectMocks
    private RampCategoryServiceImpl rampCategoryService;

    @Mock
    private RampCategoryRepository rampCategoryRepository;

    @Mock
    private QuickbooksCategoryRepository quickbooksCategoryRepository;

    @Mock
    private ModelMapper modelMapper;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void testGetAllRampCategories() {
        RampCategory rampCategory1 = new RampCategory(1, "Category 1", new QuickbooksCategory(1, "QB Category 1"));
        RampCategory rampCategory2 = new RampCategory(2, "Category 2", new QuickbooksCategory(2, "QB Category 2"));
        List<RampCategory> rampCategories = new ArrayList<>();
        rampCategories.add(rampCategory1);
        rampCategories.add(rampCategory2);

        RampCategoryDto rampCategoryDto1 = new RampCategoryDto(1, "Category 1", new QuickbooksCategory(1, "QB Category 1"));
        RampCategoryDto rampCategoryDto2 = new RampCategoryDto(2, "Category 2", new QuickbooksCategory(2, "QB Category 2"));
        List<RampCategoryDto> rampCategoryDtos = new ArrayList<>();
        rampCategoryDtos.add(rampCategoryDto1);
        rampCategoryDtos.add(rampCategoryDto2);

        when(rampCategoryRepository.findAll()).thenReturn(rampCategories);
        when(modelMapper.map(any(RampCategory.class), eq(RampCategoryDto.class))).thenReturn(rampCategoryDto1, rampCategoryDto2);

        assertEquals(rampCategoryDtos, rampCategoryService.getAllRampCategories());
        verify(rampCategoryRepository, times(1)).findAll();
        verify(modelMapper, times(2)).map(any(RampCategory.class), eq(RampCategoryDto.class));
    }

    @Test
    void testGetRampCategoryByIdSuccess() {
        RampCategory rampCategory = new RampCategory(1, "Category 1", null);
        RampCategoryDto rampCategoryDto = new RampCategoryDto(1, "Category 1", null);

        when(rampCategoryRepository.findById(1)).thenReturn(Optional.of(rampCategory));
        when(modelMapper.map(rampCategory, RampCategoryDto.class)).thenReturn(rampCategoryDto);

        RampCategoryDto result = rampCategoryService.getRampCategoryById(1);
        assertEquals(rampCategoryDto, result);
    }
    @Test
    void testGetRampCategoryByIdNotFound() {
        when(rampCategoryRepository.findById(1)).thenReturn(Optional.empty());
        assertThrows(ResourceNotFound.class, () -> rampCategoryService.getRampCategoryById(1));
    }
    @Test
    void testSaveRampCategory() {
        RampCategoryDto rampCategoryDto = new RampCategoryDto(1, "Test Ramp Category", new QuickbooksCategory(1, "Test Quickbooks Category"));
        RampCategory rampCategory = new RampCategory(1, "Test Ramp Category", new QuickbooksCategory(1, "Test Quickbooks Category"));
        RampCategory savedRampCategory = new RampCategory(1, "Test Ramp Category", new QuickbooksCategory(1, "Test Quickbooks Category"));

        when(modelMapper.map(rampCategoryDto, RampCategory.class)).thenReturn(rampCategory);
        when(rampCategoryRepository.save(rampCategory)).thenReturn(savedRampCategory);
        when(modelMapper.map(savedRampCategory, RampCategoryDto.class)).thenReturn(rampCategoryDto);

        RampCategoryDto result = rampCategoryService.saveRampCategory(rampCategoryDto);

        assertNotNull(result);
        assertEquals(savedRampCategory.getId(), result.getId());
        assertEquals(savedRampCategory.getName(), result.getName());
        assertEquals(savedRampCategory.getQuickbooksCategory().getId(), result.getQuickbooksCategory().getId());
        assertEquals(savedRampCategory.getQuickbooksCategory().getName(), result.getQuickbooksCategory().getName());

        verify(modelMapper).map(rampCategoryDto, RampCategory.class);
        verify(rampCategoryRepository).save(rampCategory);
        verify(modelMapper).map(savedRampCategory, RampCategoryDto.class);
    }

    @Test
    void testUpdateRampCategoryWithName(){
        int id = 1;
        String categoryName = "Updated Category";

        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        rampCategoryDto.setName(categoryName);
        RampCategory rampCategory = new RampCategory(1, "Original Ramp Category", new QuickbooksCategory(1, "Original Quickbooks Category"));
        RampCategory updatedRampCategory = new RampCategory(1, "Updated Ramp Category", new QuickbooksCategory(1, "Original Quickbooks Category"));

        when(rampCategoryRepository.findById(id)).thenReturn(Optional.of(rampCategory));
        when(rampCategoryRepository.save(rampCategory)).thenReturn(updatedRampCategory);
        when(modelMapper.map(updatedRampCategory, RampCategoryDto.class)).thenReturn(rampCategoryDto);

        RampCategoryDto result = rampCategoryService.updateRampCategory(id, rampCategoryDto);

        assertNotNull(result);
    }

    @Test
    void testUpdateRampCategoryWithQuickbook(){
        int id = 1;
        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        QuickbooksCategory quickbooksCategory = new QuickbooksCategory();
        quickbooksCategory.setId(2);
        rampCategoryDto.setQuickbooksCategory(quickbooksCategory);

        RampCategory rampCategory = new RampCategory(1, "Original Ramp Category", null);

        when(rampCategoryRepository.findById(id)).thenReturn(Optional.of(rampCategory));
        when(quickbooksCategoryRepository.findById(rampCategoryDto.getQuickbooksCategory().getId()))
                .thenReturn(Optional.of(new QuickbooksCategory(2, "Travel")));

        rampCategoryService.updateRampCategory(id, rampCategoryDto);
        verify(quickbooksCategoryRepository, times(1)).findById(anyInt());

    }

    @Test
    void testUpdateRampCategoryWithException(){
        int id = 1;
        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        rampCategoryDto.setName("New Category");
        rampCategoryDto.setQuickbooksCategory(new QuickbooksCategory());
        rampCategoryDto.getQuickbooksCategory().setId(2);
        when(rampCategoryRepository.findById(id)).thenReturn(Optional.of(new RampCategory()));
        when(quickbooksCategoryRepository.findById(rampCategoryDto.getQuickbooksCategory().getId()))
                .thenReturn(Optional.empty());
        assertThrows(ResourceNotFound.class, () -> rampCategoryService.updateRampCategory(id, rampCategoryDto));
        verify(rampCategoryRepository).findById(id);
        verify(quickbooksCategoryRepository).findById(rampCategoryDto.getQuickbooksCategory().getId());
    }

    @Test
    void testUpdateRampCategoryWithNullQuickbooksCategory() {
        RampCategoryDto rampCategoryDto = new RampCategoryDto();

        RampCategory rampCategory = new RampCategory();
        when(rampCategoryRepository.findById(rampCategoryDto.getId())).thenReturn(Optional.of(rampCategory));

        rampCategoryService.updateRampCategory(rampCategoryDto.getId(), rampCategoryDto);

        verify(quickbooksCategoryRepository, never()).findById(anyInt());
        verify(rampCategoryRepository, times(1)).save(rampCategory);
    }
    @Test
    void testUpdateTransactionWithValidQuickbooksCategory() {
        RampCategoryDto rampCategoryDto = new RampCategoryDto();
        QuickbooksCategory quickbooksCategoryDto = new QuickbooksCategory();
        quickbooksCategoryDto.setId(1);
        rampCategoryDto.setQuickbooksCategory(quickbooksCategoryDto);

        QuickbooksCategory quickbooksCategory = new QuickbooksCategory();
        when(quickbooksCategoryRepository.findById(quickbooksCategoryDto.getId())).thenReturn(Optional.of(quickbooksCategory));

        RampCategory rampCategory = new RampCategory();
        when(rampCategoryRepository.findById(rampCategoryDto.getId())).thenReturn(Optional.of(rampCategory));

        rampCategoryService.updateRampCategory(rampCategoryDto.getId(), rampCategoryDto);

        verify(quickbooksCategoryRepository, times(1)).findById(quickbooksCategoryDto.getId());
        verify(rampCategoryRepository, times(1)).save(rampCategory);
    }


}