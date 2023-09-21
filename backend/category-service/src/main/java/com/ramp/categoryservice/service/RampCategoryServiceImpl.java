package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.RampCategoryDto;
import com.ramp.categoryservice.entity.QuickbooksCategory;
import com.ramp.categoryservice.entity.RampCategory;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.QuickbooksCategoryRepository;
import com.ramp.categoryservice.repository.RampCategoryRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RampCategoryServiceImpl implements RampCategoryService {

    @Autowired
    private RampCategoryRepository rampCategoryRepository;
    @Autowired
    private QuickbooksCategoryRepository quickbooksCategoryRepository;

    private ModelMapper modelMapper;
    public RampCategoryServiceImpl() {
        modelMapper = new ModelMapper();
    }

    @Override
    public List<RampCategoryDto> getAllRampCategories() {
        List<RampCategory> rampCategories = rampCategoryRepository.findAll();
        return rampCategories.stream()
                .map(rampCategory -> modelMapper.map(rampCategory, RampCategoryDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public RampCategoryDto getRampCategoryById(int id) {
        RampCategory rampCategory = rampCategoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Ramp category not found with id: " + id));
        return modelMapper.map(rampCategory, RampCategoryDto.class);
    }

    @Override
    public RampCategoryDto saveRampCategory(RampCategoryDto rampCategoryDto) {
        RampCategory rampCategory = modelMapper.map(rampCategoryDto, RampCategory.class);
        RampCategory savedRampCategory = rampCategoryRepository.save(rampCategory);
        return modelMapper.map(savedRampCategory, RampCategoryDto.class);
    }

    @Override
    public RampCategoryDto updateRampCategory(int id, RampCategoryDto rampCategoryDto) {
        RampCategory rampCategory = rampCategoryRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Ramp category not found with id: " + id));

        if (rampCategoryDto.getName() != null) {
            rampCategory.setName(rampCategoryDto.getName());
        }

        if (rampCategoryDto.getQuickbooksCategory() != null && rampCategoryDto.getQuickbooksCategory().getId() > 0) {
            QuickbooksCategory quickbooksCategory = quickbooksCategoryRepository.findById(rampCategoryDto.getQuickbooksCategory().getId())
                    .orElseThrow(() -> new ResourceNotFound("Quickbooks category not found with id: " + rampCategoryDto.getQuickbooksCategory().getId()));
            rampCategory.setQuickbooksCategory(quickbooksCategory);
        }

        RampCategory updatedRampCategory = rampCategoryRepository.save(rampCategory);
        return modelMapper.map(updatedRampCategory, RampCategoryDto.class);
    }

}