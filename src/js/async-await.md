# `async` / `await`

<Vimeo id="913755484" />

## Understanding the problem

Whlist Javascript reads the lines in order, it will skip ahead if possible and
execute each line it reads as soon as it can.

```js
// Meditate.js

class Meditation {
  start() {
    console.log('Get comfortable.')

    setTimeout(() => console.log('1. Breathe in...'), 2 * 1000)
    setTimeout(() => console.log('2. Breathe out...'), 3 * 1000)
    setTimeout(() => console.log('3. Breathe in...'), 2 * 1000)
    setTimeout(() => console.log('4. Breathe out...'), 3 * 1000)

    console.log('Meditation complete.')
  }
}
```

When we execute the `.start()` method, what we see is

```console
Get comfortable.
Meditation complete.
```

and then, after about 2 seconds

```console
1. Breathe in...
3. Breathe in...
```

and after another 1 second

```console
2. Breathe out...
4. Breathe out...
```

## The triangle of doom

Here is an absolutely horrendous solution to the problem.

```js
console.log('Get comfortable.')

setTimeout(() => {
  console.log('1. Breathe in...')
  setTimeout(() => {
    console.log('2. Breathe out...')
    setTimeout(() => {
      console.log('3. Breathe in...')
      setTimeout(() => {
        console.log('4. Breathe out...')
        console.log('Meditation complete.')
      }, 3 * 1000)
    }, 2 * 1000)
  }, 3 * 1000)
}, 2 * 1000)
```

This is known affectionately as the _triangle of doom_, or sometimes _callback
hell_. It is hard to read, hard to debug, and prone to mistakes.

## Defining a promise

A _promise_ contains a special `resolve` function which it may call after a
delay.

```js
// utils.js

export function pause(n) {
  return new Promise(resolve => setTimeout(resolve, n * 1000))
}
```

Any line of code that `await`s this promise will halt Javascript's execution
until its `resolve()` is called.

## Awaiting a promise

To use the `await` keyword inside any function or method, we need to put `async`
in front of the function definition to inform Javascript that the body of the
function contains asynchronous code.

```js
import { pause } from '../utils.js'

class Meditate {
  async start() {
    console.log('Get comfortable.')
    await pause(2)

    console.log('1. Breathe in...')
    await pause(3)

    console.log('2. Breathe out...')
    await pause(2)

    console.log('3. Breathe in...')
    await pause(3)

    console.log('4. Breathe out...')
    await pause(2)

    console.log('Meditation complete.')
  }
}
```

This is extremely readable. Each use of `await` stops Javascript from executing
further code until the `resolve()` in the promise returned by `pause()` is
called.

::: tip

You can use `async`/`await` with functions too. For example:

```js
async function delayedHi() {
  await pause(3)
  console.log('Hi!')
}
```

:::
