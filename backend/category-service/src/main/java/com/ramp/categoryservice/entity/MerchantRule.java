package com.ramp.categoryservice.entity;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "merchantRule")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class MerchantRule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(nullable = false)
    private String name;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "quickbooks_category_id", unique = true)
    private QuickbooksCategory quickbooksCategory;
}
