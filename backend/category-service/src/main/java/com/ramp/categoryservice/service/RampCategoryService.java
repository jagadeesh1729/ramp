package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.RampCategoryDto;

import java.util.List;

public interface RampCategoryService {
    List<RampCategoryDto> getAllRampCategories();

    RampCategoryDto getRampCategoryById(int id);

    RampCategoryDto saveRampCategory(RampCategoryDto rampCategoryDto);

    RampCategoryDto updateRampCategory(int id, RampCategoryDto rampCategoryDto);

}