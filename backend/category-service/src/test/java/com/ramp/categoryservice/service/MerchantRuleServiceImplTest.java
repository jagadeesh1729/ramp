package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.MerchantRuleDto;
import com.ramp.categoryservice.entity.MerchantRule;
import com.ramp.categoryservice.entity.QuickbooksCategory;
import com.ramp.categoryservice.repository.MerchantRuleRepository;
import com.ramp.categoryservice.service.MerchantRuleServiceImpl;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

class MerchantRuleServiceImplTest {

    @Mock
    private MerchantRuleRepository merchantRuleRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private MerchantRuleServiceImpl merchantRuleService;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    void getAllMerchantRules_shouldReturnMerchantRules() {
        MerchantRule merchantRule1 = new MerchantRule(1, "Merchant Rule 1", new QuickbooksCategory());
        MerchantRule merchantRule2 = new MerchantRule(2, "Merchant Rule 2", new QuickbooksCategory());
        List<MerchantRule> merchantRules = Arrays.asList(merchantRule1, merchantRule2);

        MerchantRuleDto merchantRuleDto1 = new MerchantRuleDto();
        MerchantRuleDto merchantRuleDto2 = new MerchantRuleDto();
        when(merchantRuleRepository.findAll()).thenReturn(merchantRules);
        when(modelMapper.map(merchantRule1, MerchantRuleDto.class)).thenReturn(merchantRuleDto1);
        when(modelMapper.map(merchantRule2, MerchantRuleDto.class)).thenReturn(merchantRuleDto2);

        List<MerchantRuleDto> actualMerchantRules = merchantRuleService.getAllMerchantRules();

        assertEquals(2, actualMerchantRules.size());
        assertEquals(merchantRuleDto1, actualMerchantRules.get(0));
        assertEquals(merchantRuleDto2, actualMerchantRules.get(1));
    }
    @Test
    void getMerchantRuleById_validId_returnsMerchantRuleDto() {
        int id = 1;
        MerchantRule merchantRule = new MerchantRule(id, "Test", null);
        MerchantRuleDto merchantRuleDto = new MerchantRuleDto(id, "Test", null);

        when(merchantRuleRepository.findById(id)).thenReturn(Optional.of(merchantRule));
        when(modelMapper.map(merchantRule, MerchantRuleDto.class)).thenReturn(merchantRuleDto);

        MerchantRuleDto result = merchantRuleService.getMerchantRuleById(id);

        assertEquals(merchantRuleDto, result);
    }

    @Test
    void saveMerchantRule_shouldReturnSavedMerchantRule() {
        MerchantRuleDto merchantRuleDto = new MerchantRuleDto();
        merchantRuleDto.setName("Merchant Rule");
        MerchantRule merchantRule = new MerchantRule();
        merchantRule.setName("Merchant Rule");
        when(modelMapper.map(merchantRuleDto, MerchantRule.class)).thenReturn(merchantRule);
        when(merchantRuleRepository.save(merchantRule)).thenReturn(merchantRule);
        when(modelMapper.map(merchantRule, MerchantRuleDto.class)).thenReturn(merchantRuleDto);

        MerchantRuleDto actualMerchantRuleDto = merchantRuleService.saveMerchantRule(merchantRuleDto);

        assertEquals(merchantRuleDto, actualMerchantRuleDto);
    }
}