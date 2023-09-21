package com.ramp.bill_managementservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class BillManagementServiceApplicationTests {

    @Test
    void contextLoads() {
        BillManagementServiceApplication.main(new String[]{});

        // Assert
        assertNotNull(BillManagementServiceApplication.class);
        assertTrue(true);
    }

}