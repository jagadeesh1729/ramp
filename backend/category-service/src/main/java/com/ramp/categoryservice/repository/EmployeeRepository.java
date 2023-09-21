package com.ramp.categoryservice.repository;


import com.ramp.categoryservice.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}