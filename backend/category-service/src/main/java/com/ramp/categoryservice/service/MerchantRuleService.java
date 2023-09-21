package com.ramp.categoryservice.service;



import com.ramp.categoryservice.dto.MerchantRuleDto;

import java.util.List;

public interface MerchantRuleService {
    List<MerchantRuleDto> getAllMerchantRules();
    MerchantRuleDto getMerchantRuleById(int id);
    MerchantRuleDto saveMerchantRule(MerchantRuleDto merchantRuleDto);
}
