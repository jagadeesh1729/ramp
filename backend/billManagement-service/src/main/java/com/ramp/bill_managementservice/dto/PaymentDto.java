package com.ramp.bill_managementservice.dto;

import com.ramp.bill_managementservice.entity.Employee;
import com.ramp.bill_managementservice.entity.Manager;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PaymentDto {
    private Long id;
    private double amount;
    private LocalDate dueDate;
    private LocalDate invoiceDate;
    private LocalDate paymentDate;
    private String invoiceNo;
    private String  status;
    private String paymentStatus;
    private String accountNo;
    private Employee employeeId;
    private Manager managerId;
}
