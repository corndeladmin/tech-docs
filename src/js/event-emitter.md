# Event emitter

The event emitter pattern is one way of implementing an event driven program. It
enables a list of listener functions to respond to certain events within the
program, such as clicking a button.

## Event emitter class

We will create a class which implements two methods:

- `.on(event, func)` which adds the function `func` to the list of listeners

- `.emit(event, value)` which loops through the listeners and executes each one,
  passing `value` as an argument

```js
class EventEmitter {
  constructor() {
    // create a key/value store of events and listeners
    this.events = {}
  }

  on(event, func) {
    // make sure the value at 'event' is an array
    if (!this.events[event]) {
      this.events[event] = []
    }

    // add func to the list of listeners
    this.events[event].push(func)
  }

  emit(event, value) {
    // get the list of listeners for the event, if it exists
    const listeners = this.events[event] || []

    // loop through and pass `value` to each on
    for (let func of listeners) {
      func(value)
    }
  }
}
```

## Create a button

We'll create a button to extend the `EventEmitter` class, meaning it gets the
`.on()` and `.emit()` methods it needs to manage its listeners.

```js
class Button extends EventEmitter {
  constructor() {
    super()
    this.count = 0
  }

  click() {
    this.count++

    // emit the click event when clicked:
    this.emit('click', this.count)
  }
}
```

## Attach listeners

Let's create some listener functions we want to execute whenever `'click'` is
emitted by the button.

```js
function submitForm() {
  console.log('Form submitted')
}

function showDialog(count) {
  // makes use of the value `this.count` emitted by the btn
  console.log(`Clicked me ${count} times!`)
}
```

We can now use `.on()` to attach listeners to the button's `'click'` event.

::: code-group

```js
const btn = new Button()

btn.on('click', submitForm)
btn.on('click', showDialog)

btn.click()
btn.click()
btn.click()
```

```console [output]
Form submitted.
You clicked me 1 times!

Form submitted.
You clicked me 2 times!

Form submitted.
You clicked me 3 times!
```

:::
