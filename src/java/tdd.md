# Test Driven Development (TDD)

<Vimeo id="1007010432" />

## Write a simple test

Let's suppose we want to add a `SmartThermostat` class. We begin by writing one
simple test.

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SmartThermostatTest {

    @Test
    public void testThermostatIsASmartDevice() {
        // arrange
        SmartThermostat thermostat = new SmartThermostat();

        // assert
        assertTrue(thermostat instanceof SmartDevice); // Check if it is a SmartDevice
    }
}
```

## Make it pass

We run our tests and observe they are failing. Then, write just enough code to
make the test pass:

```java
public class SmartThermostat extends SmartDevice {
    // No additional functionality yet
}
```

We have satisfied the test, and we can move on.

## Add another test

We add a new test to our test suite, representing the functionality we want to
work on.

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SmartThermostatTest {

    @Test
    public void testThermostatIsASmartDevice() {
        // arrange
        SmartThermostat thermostat = new SmartThermostat();

        // assert
        assertTrue(thermostat instanceof SmartDevice);
    }

    @Test
    public void testThermostatTemperatureDefault() {
        // arrange
        SmartThermostat thermostat = new SmartThermostat();

        // assert
        assertEquals(18, thermostat.getTemperature()); // Check default temperature is 18
    }
}
```

## Make it pass

```java
public class SmartThermostat extends SmartDevice {
    private int temperature;

    public SmartThermostat() {
        super();
        this.temperature = 18; // Default temperature
    }

    public int getTemperature() {
        return this.temperature;
    }
}
```

## Keep going

TDD is iterative. It encourages developers to think carefully about what the
code should do before writing it. The goal is to gradually produce working code
along with a suite of tests that verify its correctness. If anybody else tries
to change the code, they can run the tests to ensure that their changes haven't
broken anything.
