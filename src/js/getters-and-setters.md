# Getters and setters

We saw in [private properties](./private-properties) that public methods can
allow users to work with private properties in a controlled way.

JavaScript has an interesting piece of syntax which some people prefer. We'll
discuss it in the guide.

## Refactoring the smart light

Let's revisit our smart light class:

```js
class SmartLight {
  #brightness

  constructor(color, brightness) {
    this.color = color
    this.#brightness = brightness
  }

  getBrightness() {
    if (this.isOn) {
      return this.#brightness
    } else {
      return 0
    }
  }

  setBrightness(newBrightness) {
    if (newBrightness < 0 || newBrightness > 100) {
      throw new Error('Brightness must be between 0 and 100')
    }

    this.#brightness = newBrightness
  }
}
```

## Defining getters and setters

Because the methods are concerned with getting and setting a property, they
could be refactored to make use of javascript's special `get` and `set` keywords
like this:

```js{9,17}
class SmartLight {
  #brightness

  constructor(color, brightness) {
    this.color = color
    this.#brightness = brightness
  }

  get brightness() {
    if (this.isOn) {
      return this.#brightness
    } else {
      return 0
    }
  }

  set brightness(newBrightness) {
    if (newBrightness < 0 || newBrightness > 100) {
      throw new Error('Brightness must be between 0 and 100')
    }

    this.#brightness = newBrightness
  }
}
```

## Using getters and setters

Now we can access and write to `brightness` _as though_ it is a simple property,
but crucially:

- Whenever we **read** `.brightness`, the `get brightness()` method is invoked.

- Whenever we **write** to `.brightness`, the `set brightness()` method is
  invoked with the assigned value as its argument.

This is what it looks like:

```js
const bathroomLight = new SmartLight('amber', 50)

// this will throw an error, it calls "set brightness(104)"
bathroomLight.brightness = 104

// but this is ok, it calls "set brightness(50)"
bathroomLight.brightness = 50

// this calls "get brightness()"
bathroomLight.brightness // 50
```

It is not necessary to use this special syntax, it comes down to style and
preference. So long as your class is well documented, and other developers can
use it, that is what's important.
