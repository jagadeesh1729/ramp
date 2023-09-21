package com.ramp.categoryservice.service;

import com.ramp.categoryservice.dto.MerchantDto;
import com.ramp.categoryservice.entity.Merchant;
import com.ramp.categoryservice.exception.ResourceNotFound;
import com.ramp.categoryservice.repository.MerchantRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.modelmapper.ModelMapper;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

class MerchantServiceImplTest {

    @Mock
    private MerchantRepository merchantRepository;

    @Mock
    private ModelMapper modelMapper;

    @InjectMocks
    private MerchantServiceImpl merchantService;

    private Merchant merchant1;
    private Merchant merchant2;
    private MerchantDto merchantDto1;
    private MerchantDto merchantDto2;

    @BeforeEach
    void setup() {
        MockitoAnnotations.initMocks(this);
        merchant1 = new Merchant(1, "Merchant 1", "Merchant 1 description");
        merchant2 = new Merchant(2, "Merchant 2", "Merchant 2 description");
        merchantDto1 = new MerchantDto(1, "Merchant 1", "Merchant 1 description");
        merchantDto2 = new MerchantDto(2, "Merchant 2", "Merchant 2 description");
    }

    @Test
    void testFindAll() {
        List<Merchant> merchants = new ArrayList<>();
        merchants.add(merchant1);
        merchants.add(merchant2);
        when(merchantRepository.findAll()).thenReturn(merchants);
        when(modelMapper.map(any(), any())).thenReturn(merchantDto1, merchantDto2);
        List<MerchantDto> merchantDtos = merchantService.findAll();
        assertEquals(2, merchantDtos.size());
        assertEquals("Merchant 1", merchantDtos.get(0).getName());
        assertEquals("Merchant 2", merchantDtos.get(1).getName());
    }

    @Test
    void testFindById() {
        when(merchantRepository.findById(1)).thenReturn(Optional.of(merchant1));
        when(modelMapper.map(any(), any())).thenReturn(merchantDto1);
        MerchantDto merchantDto = merchantService.findById(1);
        assertNotNull(merchantDto);
        assertEquals("Merchant 1", merchantDto.getName());
    }

    @Test
    void testFindByIdNotFound() {
        when(merchantRepository.findById(3)).thenReturn(Optional.empty());
        assertThrows(ResourceNotFound.class, () -> merchantService.findById(3));
    }

}