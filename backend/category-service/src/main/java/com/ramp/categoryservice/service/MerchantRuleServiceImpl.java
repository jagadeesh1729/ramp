package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.MerchantRuleDto;
import com.ramp.categoryservice.entity.MerchantRule;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.MerchantRuleRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;
@Service
public class MerchantRuleServiceImpl implements MerchantRuleService {

    @Autowired
    private MerchantRuleRepository merchantRuleRepository;

    private ModelMapper modelMapper;
    public MerchantRuleServiceImpl() {
        modelMapper = new ModelMapper();
    }


    @Override
    public List<MerchantRuleDto> getAllMerchantRules() {
        List<MerchantRule> merchantRules = merchantRuleRepository.findAll();
        return merchantRules.stream()
                .map(merchantRule -> modelMapper.map(merchantRule, MerchantRuleDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public MerchantRuleDto getMerchantRuleById(int id) {
        MerchantRule merchantRule = merchantRuleRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Merchant rule not found with id: " + id));
        return modelMapper.map(merchantRule, MerchantRuleDto.class);
    }

    @Override
    public MerchantRuleDto saveMerchantRule(MerchantRuleDto merchantRuleDto) {
        MerchantRule merchantRule = modelMapper.map(merchantRuleDto, MerchantRule.class);
        MerchantRule savedMerchantRule = merchantRuleRepository.save(merchantRule);
        return modelMapper.map(savedMerchantRule, MerchantRuleDto.class);
    }
}
