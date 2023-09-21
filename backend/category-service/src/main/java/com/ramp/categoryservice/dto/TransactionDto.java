package com.ramp.categoryservice.dto;

import com.ramp.categoryservice.entity.Employee;
import com.ramp.categoryservice.entity.Merchant;
import com.ramp.categoryservice.entity.QuickbooksCategory;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDto {
    private Long id;
    private double amount;
    private LocalDate date;
    private String receipt;
    private String memo;
    private Employee employee;
    private QuickbooksCategory quickbooksCategory;
    private Merchant merchant;
}