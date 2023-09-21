package com.ramp.categoryservice.controller;

import com.ramp.categoryservice.dto.MerchantRuleDto;
import com.ramp.categoryservice.exception.NotFoundException;
import com.ramp.categoryservice.service.MerchantRuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category/merchantRules")
public class MerchantRuleController {
    @Autowired
    private MerchantRuleService merchantRuleService;

    @GetMapping
    public ResponseEntity<List<MerchantRuleDto>> getAllMerchantRules() {
        List<MerchantRuleDto> merchantRules = merchantRuleService.getAllMerchantRules();
        return new ResponseEntity<>(merchantRules, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<MerchantRuleDto> getMerchantRuleById(@PathVariable int id) {
        try {
            MerchantRuleDto merchantRuleDto = merchantRuleService.getMerchantRuleById(id);
            return new ResponseEntity<>(merchantRuleDto, HttpStatus.OK);
        }
        catch (NotFoundException e) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }

    @PostMapping
    public ResponseEntity<MerchantRuleDto> createMerchantRule(@RequestBody MerchantRuleDto merchantRuleDto) {
        MerchantRuleDto createdMerchantRuleDto = merchantRuleService.saveMerchantRule(merchantRuleDto);
        return new ResponseEntity<>(createdMerchantRuleDto, HttpStatus.CREATED);
    }
}