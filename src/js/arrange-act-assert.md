# Arrange, act, assert

<Vimeo id="933686050" />

## The methodology

**Arrange**: Set up the conditions for the test.

**Act**: Execute the functionality you're testing.

**Assert**: Check that the action has produced the expected result.

## Simple example

We can use arrange, act, assert to ensure the `togglePower()` method works as
expected:

```js
import SmartDevice from '../models/SmartDevice.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The SmartDevice class', function () {
  it('should be turned on by the .togglePower() method', function () {
    // arrange
    const device = new SmartDevice()

    // act
    device.togglePower()

    // assert
    assert.strictEqual(device.isOn, true)
  })
})
```

## Chaining actions and assertions

Sometimes, it makes sense to perform multiple actions and assertions on a single
arrangement.

```js
import SmartDevice from '../models/SmartDevice.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The SmartDevice class', function () {
  // arrange
  const device = new SmartDevice()

  it('should be off by default', function () {
    // assert
    assert.strictEqual(device.isOn, false)
  })

  it('should be turned on by the .togglePower() method', function () {
    // act
    device.togglePower()

    // assert
    assert.strictEqual(device.isOn, true)
  })
})
```

Be cautious when doing this, as it can make your tests flaky. Rearrange often.
