package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.MerchantDto;
import com.ramp.categoryservice.entity.Merchant;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.MerchantRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class MerchantServiceImpl implements MerchantService {
    @Autowired
    private MerchantRepository merchantRepository;

    private ModelMapper modelMapper;
    public MerchantServiceImpl() {
        modelMapper = new ModelMapper();
    }
    @Override
    public List<MerchantDto> findAll() {
        List<Merchant> merchants = merchantRepository.findAll();
        return merchants.stream()
                .map(merchant -> modelMapper.map(merchant, MerchantDto.class))
                .collect(Collectors.toList());
    }

    @Override
    public MerchantDto findById(int id) {
        Merchant merchant = merchantRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFound("Merchant not found with id " + id));
        return modelMapper.map(merchant, MerchantDto.class);
    }
}
