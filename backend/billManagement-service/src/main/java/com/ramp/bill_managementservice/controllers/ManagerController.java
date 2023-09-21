package com.ramp.bill_managementservice.controllers;

import com.ramp.bill_managementservice.dto.ManagerDto;
import com.ramp.bill_managementservice.exception.ManagerCreationException;
import com.ramp.bill_managementservice.exception.ManagerNotFound;
import com.ramp.bill_managementservice.services.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/bill/managers")
public class ManagerController {

    @Autowired
    private ManagerService managerService;
    @PostMapping
    public ResponseEntity<ManagerDto> createManager(@RequestBody ManagerDto managerDto) throws ManagerCreationException {
            ManagerDto savedManagerDto = managerService.createManager(managerDto);
            return ResponseEntity.status(HttpStatus.CREATED).body(savedManagerDto);
    }
    @GetMapping("/{email}")
    public ResponseEntity<Object> getManagerByEmail(@PathVariable String email) throws ManagerNotFound {
            ManagerDto managerDto = managerService.getManagerByEmail(email);
            return ResponseEntity.ok(managerDto);
    }
}

