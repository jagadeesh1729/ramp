package com.ramp.categoryservice.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "transaction")
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "amount", precision = 10, scale = 2, nullable = false)
    private double amount;
    
    @Column(name = "date", nullable = false)
    private LocalDate date;
    
    @Column(name = "receipt")
    private String receipt;
    
    @Column(name = "memo")
    private String memo;
    
    @ManyToOne
    @JoinColumn(name = "employee_id")
    private Employee employee;
    
    @ManyToOne
    @JoinColumn(name = "quickbooks_category_id")
    private QuickbooksCategory quickbooksCategory;
    
    @ManyToOne
    @JoinColumn(name = "merchant_id")
    private Merchant merchant;
    
    // constructors, getters and setters
}