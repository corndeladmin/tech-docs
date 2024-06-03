# Unit testing with Mocha

<Vimeo id="933685788" />

## Setting up Mocha

We need to install the `mocha` library.

```bash
npm install --save-dev mocha
```

## Writing your first test

We use `describe` and `it` to organise our tests:

```js
import SmartDevice from '../models/SmartDevice.js'
import { describe, it } from 'mocha'
import assert from 'assert'

describe('The SmartDevice class', function () {
  it('should be off by default', function () {
    const device = new SmartDevice()
    assert.strictEqual(device.isOn, false)
  })
})
```

::: info

The `assert.strictEqual()` method checks that the two arguments are strictly
equal using javascript's `===`, whereas `assert.equal()` uses `==`. You probably
want to use `strictEqual` the majority of the time.

:::

## Running your tests

To run your tests, add a script to your `package.json` file:

```js
"scripts": {
  "test": "mocha ./test/*"
}
```

Then, execute `npm test` in your terminal.

## Exploring more features

Mocha has lots and lots of features - we've just scratched the surface in this
guide. When you have the opportunity, you should explore the
[Mocha documentation](https://mochajs.org/) to learn more about what it can do.
