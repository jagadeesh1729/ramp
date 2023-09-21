package com.ramp.bill_managementservice.services;

import com.ramp.bill_managementservice.dto.ManagerDto;
import com.ramp.bill_managementservice.entity.Manager;
import com.ramp.bill_managementservice.exception.ManagerCreationException;
import com.ramp.bill_managementservice.exception.ManagerNotFound;
import com.ramp.bill_managementservice.mapper.ManagerModalMapper;
import com.ramp.bill_managementservice.repository.ManagerRepository;
import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.Arguments;
import org.junit.jupiter.params.provider.CsvSource;
import org.junit.jupiter.params.provider.MethodSource;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import java.util.Optional;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.MockitoAnnotations.initMocks;
@ExtendWith(SpringExtension.class)
class ManagerServiceImplTest {
    @Mock
    private ManagerRepository managerRepository;

    @Mock
    private ManagerModalMapper managerModalMapper;

    @InjectMocks
    private ManagerServiceImpl managerService;

    @BeforeEach
    void setUp() {
        initMocks(this);
    }
    @Test
    void testCreateManager_ValidManagerDto_ReturnsManagerDto() throws ManagerCreationException {
        ManagerDto validManagerDto = new ManagerDto();
        validManagerDto.setName("John Doe");
        validManagerDto.setEmail("johndoe@example.com");
        validManagerDto.setPassword("password");
        ManagerDto createdManagerDto = managerService.createManager(validManagerDto);

        Assertions.assertEquals(validManagerDto, createdManagerDto);
    }
    @Test
     void testCreateManager_NullManagerDto_ThrowsManagerCreationException() {
        ManagerDto nullManagerDto = new ManagerDto();

        assertThrows(ManagerCreationException.class, () -> {
            managerService.createManager(nullManagerDto);
        });
    }
    @Test
     void testGetManagerByEmail_ExistingEmail_ReturnsManagerDto() throws ManagerNotFound {
        String email = "johndoe@example.com";
        Manager manager = new Manager();
        manager.setEmail(email);

        ManagerDto expectedManagerDto = new ManagerDto();
        expectedManagerDto.setEmail(email);

        Mockito.when(managerRepository.findByEmail(email)).thenReturn(Optional.of(manager));
        Mockito.when(managerModalMapper.entityToDto(manager)).thenReturn(expectedManagerDto);

        ManagerDto result = managerService.getManagerByEmail(email);

        Assertions.assertEquals(expectedManagerDto, result);
    }
    @Test
     void testGetManagerByEmail_NonexistentEmail_ThrowsManagerNotFound() {
        String email = "nonexistent@example.com";

        Mockito.when(managerRepository.findByEmail(email)).thenReturn(Optional.empty());

        assertThrows(ManagerNotFound.class, () -> {
            managerService.getManagerByEmail(email);
        });
    }
    @Test
     void testCreateManager_InvalidDetails() {
        // Prepare test data
        ManagerDto invalidManagerDto = new ManagerDto();

        // Call the method under test and verify that it throws the expected exception
        assertThrows(ManagerCreationException.class, () -> managerService.createManager(invalidManagerDto));
    }
    @Test
     void testCreateManager_NullManagerDto() {
        // Prepare test data
        ManagerDto nullManagerDto = null;

        // Call the method under test and verify that it throws the expected exception
        assertThrows(ManagerCreationException.class, () -> managerService.createManager(nullManagerDto));
    }
    @Test
     void testCreateManager_NullName() {
        // Prepare test data
        ManagerDto managerDto = new ManagerDto();
        managerDto.setName(null);

        // Call the method under test and verify that it throws the expected exception
        assertThrows(ManagerCreationException.class, () -> managerService.createManager(managerDto));
    }

    @Test
     void testCreateManager_NullEmail() {
        // Prepare test data
        ManagerDto managerDto = new ManagerDto();
        managerDto.setEmail(null);

        // Call the method under test and verify that it throws the expected exception
        assertThrows(ManagerCreationException.class, () -> managerService.createManager(managerDto));
    }
    @Test
     void testCreateManager_NullPassword() {
        // Prepare test data
        ManagerDto managerDto = new ManagerDto();
        managerDto.setPassword(null);

        // Call the method under test and verify that it throws the expected exception
        assertThrows(ManagerCreationException.class, () -> managerService.createManager(managerDto));
    }
    @ParameterizedTest
    @MethodSource("invalidManagerDetailsProvider")
    void testCreateManager_InvalidDetails_ThrowsManagerCreationException(String name, String email, String password) {
        // Prepare test data
        ManagerDto managerDto = new ManagerDto();
        managerDto.setName(name);
        managerDto.setEmail(email);
        managerDto.setPassword(password);

        // Call the method under test and verify that it throws the expected exception
        assertThrows(ManagerCreationException.class, () -> {
            managerService.createManager(managerDto);
        });
    }

    private static Stream<Arguments> invalidManagerDetailsProvider() {
        return Stream.of(
                Arguments.of(null, "johndoe@example.com", "password"),
                Arguments.of("John Doe", null, "password"),
                Arguments.of("John Doe", "johndoe@example.com", null)
        );
    }

    @Test
    void etestCreateManager_NullManagerDto_ThrowsManagerCreationException() {
        // Prepare test data
        ManagerDto managerDto = null;

        // Call the method under test and verify that it throws the expected exception
        assertThrows(ManagerCreationException.class, () -> managerService.createManager(managerDto));
    }




}
