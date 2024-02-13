# Testing with Mocha

Unit testing is a crucial part of the software development process, where you
test the smallest parts of your application, called units, to ensure they work
as intended. Mocha is a popular JavaScript testing framework that makes it easy
to write and run these tests. It provides a flexible and fun environment for
defining tests, making asynchronous testing simple, and allowing for powerful
test reporting.

## Setting up Mocha

First things first, you'll need to set up Mocha in your project. Assuming you're
using Node.js, you can install Mocha using npm, the Node package manager. Open
your terminal and run:

```bash
npm install --save-dev mocha
```

This command installs Mocha as a development dependency in your project, meaning
it won't be included in the production build but will be available for testing.
You should see it in your `package.json`.

## Writing your first test

With Mocha installed, you're ready to write your first test. Mocha tests are
written in a behaviour-driven development (BDD) style, which allows you to
describe the behaviour of your functions in a readable format. Let's say you
have a simple function to test, `addNumbers`, that adds two numbers:

```js
// addNumbers.js
export function addNumbers(a, b) {
  return a + b
}
```

To test this function, create a new file named `addNumbers.test.js` in a `test`
directory. Mocha will automatically run files in the `test` folder by default.

```js
// test/test.js
import { addNumbers } from '../addNumbers.js'
import assert from 'assert'

describe('addNumbers', function () {
  it('should add two numbers correctly', function () {
    assert.strictEqual(addNumbers(2, 3), 5)
  })

  it('should handle negative numbers', function () {
    assert.strictEqual(addNumbers(-4, -6), -10)
  })
})
```

In this example, `describe()` is used to group tests, and `it()` is used to
define an individual test case. `assert.strictEqual()` checks if the result of
`addNumbers(2, 3)` is strictly equal to `5`.

## Running your tests

To run your tests, add a script to your `package.json` file:

```js
"scripts": {
  "test": "mocha"
}
```

Then, execute `npm test` in your terminal. Mocha will run all tests in the
`test` directory, and you should see output indicating whether your test passed
or failed.

## Exploring more features

Mocha has lots and lots of features - we've just scratched the surface in this
guide. When you have the opportunity, you should explore the
[Mocha documentation](https://mochajs.org/) to learn more about what it can do.
