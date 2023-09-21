package com.ramp.bill_managementservice.controllers;
import com.ramp.bill_managementservice.dto.EmployeeDto;
import com.ramp.bill_managementservice.exception.EmployeeEmptyException;
import com.ramp.bill_managementservice.exception.EmployeeNotFoundException;
import com.ramp.bill_managementservice.exception.InvalidFormatException;
import com.ramp.bill_managementservice.services.EmployeeService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import java.util.ArrayList;
import java.util.List;
import static org.junit.Assert.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.Mockito.when;

class EmployeeControllerTest {

    private MockMvc mockMvc;

    @Mock
    private EmployeeService employeeService;


    @InjectMocks
    private EmployeeController employeeController;

    @BeforeEach
    void setUp() {
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(employeeController).build();
    }

    @Test
     void testGetAllEmployees_Successful() throws EmployeeEmptyException, EmployeeNotFoundException {
        List<EmployeeDto> employees = new ArrayList<>();
        when(employeeService.getAllEmployees()).thenReturn(employees);
        ResponseEntity<List<EmployeeDto>> response = employeeController.getAllEmployees();
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(employees, response.getBody());
    }
    @Test
     void testGetAllEmployees_ExceptionThrown() throws EmployeeEmptyException {
        when(employeeService.getAllEmployees()).thenThrow(EmployeeEmptyException.class);
        assertThrows(EmployeeEmptyException.class, () -> employeeController.getAllEmployees());
    }    @Test
     void testGetEmployeeById_Successful() throws  EmployeeNotFoundException, InvalidFormatException {
        String employeeId = "123";
        EmployeeDto employeeDto = new EmployeeDto();
        when(employeeService.getEmployeeById(employeeId)).thenReturn(employeeDto);
        ResponseEntity<Object> response = employeeController.getEmployeeById(employeeId);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(employeeDto, response.getBody());
    }

}