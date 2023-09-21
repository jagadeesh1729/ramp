package com.ramp.categoryservice.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
    private long id;
    private String name;
    private String dob;
    private String description;

    public EmployeeDto(Long id, String name, LocalDate dob, String description) {
        this.id = id;
        this.name = name;
        this.dob = dob.format(DateTimeFormatter.ISO_LOCAL_DATE);
        this.description = description;
    }

}






