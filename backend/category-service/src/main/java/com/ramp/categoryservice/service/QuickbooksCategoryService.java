package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.QuickbooksCategoryDto;

import java.util.List;

public interface QuickbooksCategoryService {
    List<QuickbooksCategoryDto> getAllQuickbooksCategories();
    QuickbooksCategoryDto getQuickbooksCategoryById(int id);
}
