package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.QuickbooksCategoryDto;
import com.ramp.categoryservice.entity.QuickbooksCategory;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.QuickbooksCategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class QuickbooksCategoryServiceImpl implements QuickbooksCategoryService {

    @Autowired
    private QuickbooksCategoryRepository quickbooksCategoryRepository;

    private ModelMapper modelMapper;
    public QuickbooksCategoryServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public List<QuickbooksCategoryDto> getAllQuickbooksCategories() {
        List<QuickbooksCategory> quickbooksCategories = quickbooksCategoryRepository.findAll();
        return quickbooksCategories.stream()
                .map(quickbooksCategory -> modelMapper.map(quickbooksCategory, QuickbooksCategoryDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public QuickbooksCategoryDto getQuickbooksCategoryById(int id) {
        QuickbooksCategory quickbooksCategory = quickbooksCategoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Quickbooks category not found with id: " + id));
        return modelMapper.map(quickbooksCategory, QuickbooksCategoryDto.class);
    }
}
