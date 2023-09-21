package com.ramp.categoryservice.repository;

import com.ramp.categoryservice.entity.Merchant;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MerchantRepository extends JpaRepository<Merchant, Integer> {
}
