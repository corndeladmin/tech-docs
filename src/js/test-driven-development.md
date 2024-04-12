# Test Driven Development (TDD)

<Vimeo id="933685989" />

## Write a simple test

Let's suppose we want to add a `SmartThermostat` class. We begin by writing one
simple test.

```js
import SmartThermostat from '../models/SmartThermostat.js'
import SmartDevice from '../models/SmartDevice.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The SmartThermostat class', function () {
  it('should be a SmartDevice', function () {
    const thermostat = new SmartThermostat()
    assert.strictEqual(thermostat instanceof SmartDevice, true)
  })
})
```

## Make it pass

We run our tests and observe they are failing. Then, write just enough code to
make the test pass:

```js
import SmartDevice from './SmartDevice.js'

class SmartThermostat extends SmartDevice {}

export default SmartThermostat
```

We have satisfied the test, and we can move on.

## Add another test

We add a new test to our test suite, representing the functionality we want to
work on.

```js{12-18}
import SmartThermostat from '../models/SmartThermostat.js'
import SmartDevice from '../models/SmartDevice.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The SmartThermostat class', function () {
  it('should be a SmartDevice', function () {
    const thermostat = new SmartThermostat()
    assert.strictEqual(thermostat instanceof SmartDevice, true)
  })

  describe('the temperature', () => {
    const thermostat = new SmartThermostat()

    it('should be 18 by default', () => {
      assert.strictEqual(thermostat.temperature, 18)
    })
  })
})
```

## Make it pass

```js{4-7}
import SmartDevice from './SmartDevice.js'

class SmartThermostat extends SmartDevice {
  constructor() {
    super()
    this.temperature = 18
  }
}

export default SmartThermostat
```

## Keep going

TDD is iterative. It encourages developers to think carefully about what the
code should do before writing it. The goal is to gradually produce working code
along with a suite of tests which verify its correctness. If anybody else tries
to change the code, they can run the tests to ensure that their changes haven't
broken anything.
