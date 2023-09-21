package com.ramp.bill_managementservice.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private double amount;
    @Column(name ="due_date")
    private LocalDate dueDate;
    @Column(name="invoice_date")
    private LocalDate invoiceDate;
    @Column(name="payment_date")
    private LocalDate paymentDate;
    @Column(name="invoice_no")
    private String invoiceNo;
    @Column(name="account_no")
    private  String accountNo;
    private String  status;
    @Column(name="payment_status")
    private String paymentStatus;
    @ManyToOne
    @JoinColumn(name="employee_id")
    private Employee employeeId;
    @ManyToOne
    @JoinColumn(name="manager_id")
    private Manager managerId;
}

