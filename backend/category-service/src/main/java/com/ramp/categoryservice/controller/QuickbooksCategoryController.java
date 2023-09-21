package com.ramp.categoryservice.controller;

import com.ramp.categoryservice.dto.QuickbooksCategoryDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.QuickbooksCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/category/quickbooksCategories")
public class QuickbooksCategoryController {

    @Autowired
    private QuickbooksCategoryService quickbooksCategoryService;

    @GetMapping
    public ResponseEntity<List<QuickbooksCategoryDto>> getAllQuickbooksCategories() {
        List<QuickbooksCategoryDto> quickbooksCategories = quickbooksCategoryService.getAllQuickbooksCategories();
        return new ResponseEntity<>(quickbooksCategories, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<QuickbooksCategoryDto> getQuickbooksCategoryById(@PathVariable("id") int id) {
        try {
            QuickbooksCategoryDto quickbooksCategory = quickbooksCategoryService.getQuickbooksCategoryById(id);
            return new ResponseEntity<>(quickbooksCategory, HttpStatus.OK);
        }catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

}