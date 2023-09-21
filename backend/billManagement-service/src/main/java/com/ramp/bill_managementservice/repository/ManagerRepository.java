package com.ramp.bill_managementservice.repository;

import com.ramp.bill_managementservice.entity.Manager;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ManagerRepository extends JpaRepository<Manager,Long> {
    Optional<Manager> findByEmail(String email);
}

