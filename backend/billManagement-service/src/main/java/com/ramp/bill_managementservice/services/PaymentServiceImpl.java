package com.ramp.bill_managementservice.services;

import com.ramp.bill_managementservice.dto.PaymentDto;
import com.ramp.bill_managementservice.entity.Employee;
import com.ramp.bill_managementservice.entity.Manager;
import com.ramp.bill_managementservice.entity.Payment;
import com.ramp.bill_managementservice.exception.*;
import com.ramp.bill_managementservice.mapper.PaymentModalMapper;
import com.ramp.bill_managementservice.repository.EmployeeRepository;
import com.ramp.bill_managementservice.repository.ManagerRepository;
import com.ramp.bill_managementservice.repository.PaymentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class PaymentServiceImpl implements PaymentServices{

    @Autowired
    public PaymentRepository paymentRepository;
    @Autowired
    public EmployeeRepository employeeRepository;
    @Autowired
    public ManagerRepository managerRepository;
    private PaymentModalMapper paymentModalMapper;
    public PaymentServiceImpl(PaymentRepository paymentRepository, EmployeeRepository employeeRepository, ManagerRepository managerRepository, PaymentModalMapper paymentModalMapper) {
        this.paymentRepository = paymentRepository;
        this.employeeRepository = employeeRepository;
        this.managerRepository = managerRepository;
        this.paymentModalMapper = paymentModalMapper;
    }
    @Override
    public PaymentDto addSinglePayment(PaymentDto paymentDto){
        Payment payment = paymentModalMapper.dtoToEntity(paymentDto);
        Employee employee = paymentDto.getEmployeeId();
        employeeRepository.save(employee);
        Manager manager = paymentDto.getManagerId();
        managerRepository.save(manager);
        paymentRepository.save(payment);
        return paymentDto;
    }

    @Override
    public List<PaymentDto> getAllPayments() throws PaymentEmptyException {
        List<Payment> paymentList = paymentRepository.findAll();
        List<PaymentDto> paymentDtoList = new ArrayList<>();
        for (Payment payment : paymentList) {
            paymentDtoList.add(paymentModalMapper.entityToDto(payment));
        }
        if (paymentDtoList.isEmpty()) {
            throw new PaymentEmptyException("No payments found.");
        }
        return paymentDtoList;
    }

    @Override
    public PaymentDto getOnePayment(String id) throws PaymentNotFoundException , InvalidFormatException {
        Long paymentId;
        try{
            paymentId=Long.parseLong(id);
        }
        catch (Exception e){
            throw new InvalidFormatException("Invalid input: ID must be a valid numeric value.");
        }
        Optional<Payment> optionalPayment=paymentRepository.findById(paymentId);
        if(optionalPayment.isEmpty()){
            throw new PaymentNotFoundException("Payment not Found with Id "+paymentId);
        }
        Payment payment=optionalPayment.get();
        return paymentModalMapper.entityToDto(payment);
    }

    @Override
    public String deletePaymentWithId(String id) throws InvalidFormatException {
        Long paymentId;
        try{
            paymentId=Long.parseLong(id);
        }
        catch (Exception e){
            throw new InvalidFormatException("Invalid input: ID must be a valid numeric value.");
        }
        Payment payment = paymentRepository.findById(paymentId).orElseThrow(() -> new PaymentNotFoundException("Payment not found"+id));
        paymentRepository.delete(payment);
        return "Payment with id"+id+" is deleted";
    }
@Override
public PaymentDto updatePaymentById(PaymentDto paymentDto, Long id) throws PaymentNotFoundException, PaymentUpdateException {
    if (paymentDto == null) {
        throw new InvalidPaymentDataException("Payment Body is not correct");
    }

    Payment payment = paymentRepository.findById(id)
            .orElseThrow(() -> new PaymentNotFoundException("Payment not found " + id));

    try {
        Double amount=paymentDto.getAmount();
        if (amount > 0) {
            payment.setAmount(paymentDto.getAmount());
        }

        if (paymentDto.getInvoiceDate() != null) {
            payment.setInvoiceDate(paymentDto.getInvoiceDate());
        }

        if (paymentDto.getInvoiceNo() != null) {
            payment.setInvoiceNo(paymentDto.getInvoiceNo());
        }

        if (paymentDto.getAccountNo() != null) {
            payment.setAccountNo(paymentDto.getAccountNo());
        }

        if (paymentDto.getDueDate() != null) {
            payment.setDueDate(paymentDto.getDueDate());
        }

        if (paymentDto.getPaymentDate() != null) {
            payment.setPaymentDate(paymentDto.getPaymentDate());
        }

        if (paymentDto.getEmployeeId() != null) {
            payment.setEmployeeId(paymentDto.getEmployeeId());
            employeeRepository.save(paymentDto.getEmployeeId());
        }

        if (paymentDto.getManagerId() != null) {
            payment.setManagerId(paymentDto.getManagerId());
            managerRepository.save(paymentDto.getManagerId());
        }

        if (paymentDto.getStatus() != null) {
            payment.setStatus(paymentDto.getStatus());
        }

        if (paymentDto.getPaymentStatus() != null) {
            payment.setPaymentStatus(paymentDto.getPaymentStatus());
        }

        payment = paymentRepository.save(payment);

        return paymentModalMapper.entityToDto(payment);
    } catch (Exception e) {
        throw new PaymentUpdateException("Failed to update payment: " + e.getMessage());
    }
}

}

