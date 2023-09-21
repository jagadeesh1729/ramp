package com.ramp.categoryservice.controller;

import com.ramp.categoryservice.dto.ManagerDto;
import com.ramp.categoryservice.service.ManagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/category/managers")
public class ManagerController {

    @Autowired
    private ManagerService managerService;


    @PostMapping("")
    public ResponseEntity<ManagerDto> createManager(@RequestBody ManagerDto managerDto) {
        ManagerDto savedManagerDto = managerService.createManager(managerDto);
        return new ResponseEntity<>(savedManagerDto, HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    public ResponseEntity<ManagerDto> getManagerByEmail(@PathVariable String email) {
        ManagerDto managerDto = managerService.getManagerByEmail(email);
        return new ResponseEntity<>(managerDto, HttpStatus.OK);
    }

}