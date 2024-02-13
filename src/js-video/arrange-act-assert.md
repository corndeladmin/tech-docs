# Arrange, act, assert

One popular methodology for crafting effective unit tests is the "Arrange, Act,
Assert" pattern. This approach simplifies test writing by breaking down the
process into three clear steps:

1. **Arrange**: Set up the conditions for the test.
1. **Act**: Execute the functionality you're testing.
1. **Assert**: Check that the action has produced the expected result.

To demonstrate this, we'll return to our hypothetical software suite designed
for managing smart home devices.

## Example setup

First, let's define our classes. We'll define the `SmartDevice` class, which
serves as a superclass for all smart devices in our suite. We'll also define the
`SmartThermostat` class which controls central heating in the home.

::: code-group

```js [SmartDevice.js]
class SmartDevice {
  constructor(name) {
    this.name = name
    this.isConnected = false
  }

  connect() {
    this.isConnected = true
  }

  disconnect() {
    this.isConnected = false
  }
}
```

```js [SmartThermostat.js]
class SmartThermostat extends SmartDevice {
  constructor(name, isConnected) {
    super(name)
    this.isOn = false
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

:::

## Unit testing with "Arrange, Act, Assert"

Now, let's craft a unit test for our `SmartThermostat` class, focusing on the
`turnOn()` method. We'll be using Mocha for our testing framework.

```js
// test/SmartThermostat.test.js
import assert from 'assert'
import { SmartThermostat } from '../classes/SmartThermostat.js'

describe('SmartThermostat', function () {
  describe('#turnOn()', function () {
    it('should turn on when the thermostat is connected', function () {
      // Arrange
      const thermostat = new SmartThermostat('Hallway')

      // Act
      thermostat.turnOn()

      // Assert
      assert.strictEqual(thermostat.isOn, true)
    })
  })
})
```

## Testing for errors

Sometimes, we want to use unit testing to ensure our software fails gracefully.
If we expect an error to be thrown in certain circumstances, we can use
`assert.throws()`. Let's add another test to the suite to check that the correct
error gets thrown.

```js
// test/SmartThermostat.test.js
import assert from 'assert'
import { SmartThermostat } from '../classes/SmartThermostat.js'

describe('SmartThermostat', function () {
  describe('#turnOn()', function () {
    it('should turn on when the thermostat is connected', function () {
      // Arrange
      const thermostat = new SmartThermostat('Hallway')
      // Act
      thermostat.turnOn()
      // Assert
      assert.strictEqual(thermostat.isOn, true)
    })
    // [!code focus:12]
    it('should throw an error when not connected', function () {
      // Arrange
      const thermostat = new SmartThermostat('Kitchen')

      // Act & Assert
      assert.throws(
        () => thermostat.turnOn(),
        Error,
        'Thermostat must be connected to turn on.'
      )
    })
  })
})
```

## Using Mocha hooks

Mocha includes powerful hooks that run before and after your test cases.
`beforeEach` runs before each test in a `describe()` block, ensuring that every
test starts with a certain set of conditions. If we can use the same arrangement
for several tests, it makes our test suites a bit neater.

Let's refactor our `SmartThermostat` test suite with this in mind.

```js{6-11}
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
  })
})
```

We have extracted the "Arrange" part to a `beforeEach()` hook, meaning we don't
need to do this manually in every `it()`. This might not always be an
appropriate way of organising the test file, but in certain circumstances it can
prevent repetition. Mocha has many more hooks which you should explore in the
[documentation](https://mochajs.org/).
