package com.ramp.categoryservice.dto;

import com.ramp.categoryservice.entity.QuickbooksCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MerchantRuleDto {

    private int id;
    private String name;
    private QuickbooksCategory quickbooksCategory;
}