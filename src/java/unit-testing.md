# Unit testing

<Vimeo id="1007009752" />

## Writing your first test

We use `@Test` and JUnit assertions to organize our tests:

```java
import org.junit.jupiter.api.Test;
import static org.junit.jupiter.api.Assertions.*;

public class SmartLightTest {

    @Test
    public void testSmartLightShouldBeOffByDefault() {
        SmartLight device = new SmartLight("warm white", 75);
        assertFalse(device.isOn());
    }
}
```

- `@Test`: This annotation marks a method as a test method.

- `assertFalse`: This is a JUnit assertion that checks if the condition is
  `false`, which is equivalent to checking that the smart light is off by
  default.

- **JUnit Assertions**: JUnit has a wide range of assertions like
  `assertEquals()`, `assertTrue()`, `assertNull()`, etc.

## Running your tests

In Maven projects, to run your tests, use the following configuration in the
`pom.xml`:

```xml [pom.xml]
<build>
    <plugins>
        <plugin>
            <groupId>org.apache.maven.plugins</groupId>
            <artifactId>maven-surefire-plugin</artifactId>
            <version>3.0.0-M5</version> <!-- Ensure you have the correct version -->
            <configuration>
                <includes>
                    <include>**/*Test.java</include> <!-- Includes all test files -->
                </includes>
            </configuration>
        </plugin>
    </plugins>
</build>
```

Then, execute the following command in your terminal to run your tests:

```bash
mvn test
```

## Exploring more features

JUnit has many powerful features such as test suites, parameterized tests, and
more. When you have the opportunity, you should explore the
[JUnit documentation](https://junit.org/junit5/) to learn more about what it can
do.
