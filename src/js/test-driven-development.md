# Test Driven Development (TDD)

Test-Driven Development (TDD) is a software development approach where tests are
written before the actual code. The process follows a simple but powerful cycle
known as "Red-Green-Refactor":

1. **Red**: Write a test that defines a desired improvement or new function,
   which will naturally fail because it precedes the functionality.

1. **Green**: Write the minimum amount of code necessary to pass the test.

1. **Refactor**: Clean up the new code, ensuring it fits well with the existing
   design and adheres to your team's standards.

This cycle encourages developers to think about the requirements and design of
the functionality before writing the code, leading to more focused and cleaner
implementations.

## Red: Write the test first

Let's suppose we want to add a `setTargetTemperature` method to our
`SmartThermostat` class. Before we add the method to our class, we write the
test.

```js
// test/SmartThermostat.test.js
import assert from 'assert'
import { SmartThermostat } from '../classes/SmartThermostat.js'

describe('SmartThermostat', function () {
  let thermostat

  beforeEach(function () {
    // Arrange: Set up a new thermostat before each test
    thermostat = new SmartThermostat('Hallway')
  })

  describe('#turnOn()', function () {
    it('should turn on when the thermostat is connected', function () {
      // Act
      thermostat.turnOn()
      // Assert
      assert.strictEqual(thermostat.isOn, true)
    })

    it('should throw an error when not connected', function () {
      // Act & Assert
      assert.throws(
        () => thermostat.turnOn(),
        Error,
        'Thermostat must be connected to turn on.'
      )
    })
    // [!code focus:8]
    it('should allow setting a target temperature', function () {
      // Act
      thermostat.setTargetTemperature(21)

      // Assert
      assert.strictEqual(thermostat.getTargetTemperature(), 21)
    })
  })
})
```

We run our tests with `npm run test` and observe that the test suite is failing,
because we haven't implemented this method yet.

## Green: Make the test pass

We need to add the required functionality to the `SmartThermostat` class.

```js{5,8-14}
class SmartThermostat extends SmartDevice {
  constructor(name, isConnected) {
    super(name)
    this.isOn = false
    this.targetTemperature = 18 // default temperature
  }

  setTargetTemperature(temp) {
    this.targetTemperature = temp
  }

  getTargetTemperature() {
    return this.targetTemperature
  }

  turnOn() {
    if (this.isConnected) {
      this.isOn = true
    } else {
      throw new Error('Thermostat must be connected to turn on.')
    }
  }

  turnOff() {
    this.isOn = false
  }
}
```

With this implementation, our test should now pass ("Green"), as we've provided
the minimal code required to satisfy the test's expectations.

## Refactor: Clean up the code

After getting the test to pass, it's time to refactor. This step is about
improving the code without changing its functionality. You might improve the
naming, reduce duplication, or apply design patterns.

Our initial implementation is quite simple and doesn't require immediate
refactoring. However, as our application grows, we might come back to refactor
this code to better integrate with other components or to improve performance.
As we refactor, we can continue to run the tests regularly to ensure we haven't
broken the functionality.

## Continuing the cycle

TDD is iterative. After completing one cycle, you start the next by writing a
new test. Perhaps the next test involves integrating the thermostat with a
scheduling system to adjust temperatures automatically at different times of the
day. Each new feature starts with a test, followed by the minimum code to pass
the test, and ends with refactoring.
