package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.MerchantDto;

import java.util.List;

public interface MerchantService {
    List<MerchantDto> findAll();
    MerchantDto findById(int id);
}
