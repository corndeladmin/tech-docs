# `async` / `await`

Javascript allows us to do _asynchronous programming_. This basically means we
can ask our program to wait for some other system (perhaps another program or
another computer) to respond before it goes on executing the rest of the code.

It may seem backwards that we're asking our program to _slow down_ because
usually faster is better, but what if we need to get data from a database in
order to process it? Well our program had better not go ahead and start trying
to process before the database has finished giving us the data!

## Understanding the problem

Let's suppose we want to add a guided meditation feature to our health tracker
app. It should print a message, wait a few seconds, print another message, and
so on, until the meditation is complete.

We will use Javascript's `setTimeout` built in function for this. You don't need
to import `setTimeout` as it is a global function. Here is a naive attempt:

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

However, when we execute the `.start()` method, what we see is

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

A disaster!

The problem is that Javascript will remember it needs to perform the function
passed to `setTimeout` after the given interval, and puts it on a "todo" list.
It then gets on with the next command as quickly as possible, and executes the
items on the todo list when they're ready.

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

A much better solution to this problem is provided by a class of objects in
javascript called `Promise`. When we create a promise, we can call a special
function called `resolve()`. By using the `await` keyword, we request that
Javascript waits for `resolve()` to be called before executing the rest of the
program.

Let's refactor our code by creating a `pause(n)` function which returns a
promise, and only calls resolve after `n` seconds.

```js
// utils.js

export function pause(n) {
  return new Promise(resolve => setTimeout(resolve, n * 1000))
}
```

As we said, this `pause` function returns a promise whose `resolve()` gets
called after `n` seconds. Any line of code that `await`s this promise will halt
Javascript's execution until the `resolve()` is called.

## Awaiting a promise

To use the `await` keyword inside any function or method, we need to put `async`
in front of the function definition to inform Javascript that the body of the
function contains asynchronous code. Here's how our improved meditate class
would look:

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
