package com.ramp.categoryservice.controller;

import com.ramp.categoryservice.dto.RampCategoryDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.RampCategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category/rampCategories")
public class RampCategoryController {
    @Autowired
    private RampCategoryService rampCategoryService;

    @GetMapping("")
    public ResponseEntity<List<RampCategoryDto>> getAllRampCategories() {
        List<RampCategoryDto> rampCategoryDtos = rampCategoryService.getAllRampCategories();
        return new ResponseEntity<>(rampCategoryDtos, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RampCategoryDto> getRampCategoryById(@PathVariable int id) {
        try {
            RampCategoryDto rampCategoryDto = rampCategoryService.getRampCategoryById(id);
            return new ResponseEntity<>(rampCategoryDto, HttpStatus.OK);
        }catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping("")
    public ResponseEntity<RampCategoryDto> saveRampCategory(@RequestBody RampCategoryDto rampCategoryDto) {
        RampCategoryDto savedRampCategoryDto = rampCategoryService.saveRampCategory(rampCategoryDto);
        return new ResponseEntity<>(savedRampCategoryDto, HttpStatus.CREATED);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<String> updateRampCategory(@PathVariable("id") int id, @RequestBody RampCategoryDto rampCategoryDto) {
        try {
            rampCategoryService.updateRampCategory(id,rampCategoryDto);
            return ResponseEntity.ok("rampCategory updated successfully");
        } catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("not found");
        }
    }
}
