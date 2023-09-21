package com.ramp.categoryservice.repository;

import com.ramp.categoryservice.entity.QuickbooksCategory;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuickbooksCategoryRepository extends JpaRepository<QuickbooksCategory, Integer> {
}
