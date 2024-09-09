# Arrange, act, assert

<Vimeo id="1007009696" />

## The methodology

**Arrange**: Set up the conditions for the test.

**Act**: Execute the functionality you're testing.

**Assert**: Check that the action has produced the expected result.

## Simple example

We can use arrange, act, assert to ensure the `togglePower()` method works as
expected:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SmartLightTest {

    @Test
    public void testTogglePowerTurnsLightOn() {
        // arrange
        SmartLight light = new SmartLight("white", 50);

        // act
        light.togglePower();

        // assert
        assertTrue(light.isOn());
    }
}
```

## Testing an arrangement multiple times

Bear in mind that there is no guarantee to the order in which tests execute. If
you want to test a particular arrangement several times, you need to do it in
the same method, or else rearrange for each test.

::: code-group

```java [good]
public class SmartLightTest {

    @Test
    public void testLightIsOffByDefault() {
        // arrange
        SmartLight light = new SmartLight("white", 50);

        // assert
        assertFalse(light.isOn());
    }

    @Test
    public void testTogglePowerTurnsLightOn() {
        // arrange
        SmartLight light = new SmartLight("white", 50);

        // act
        light.togglePower();

        // assert
        assertTrue(light.isOn());
    }
}
```

```java [ok]
public class SmartLightTest {

    @Test
    public void testTogglePower() {
        // arrange
        SmartLight light = new SmartLight("white", 50);

        // assert
        assertFalse(light.isOn());

        // act
        light.togglePower();

        // assert
        assertTrue(light.isOn());
    }
}
```

```java [bad]
public class SmartLightTest {

    // arrange
    SmartLight light = new SmartLight("white", 50);

    @Test
    public void testLightIsOffByDefault() {
        // assert
        assertFalse(light.isOn());
    }

    @Test
    public void testTogglePowerTurnsLightOn() {
        // act
        light.togglePower();

        // assert
        assertTrue(light.isOn());
    }
}
```

:::

The **bad** example will sometimes fail because the second test runs before the
first one.
