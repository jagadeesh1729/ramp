package com.ramp.categoryservice.repository;

import com.ramp.categoryservice.entity.RampCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RampCategoryRepository extends JpaRepository<RampCategory, Integer> {
}
