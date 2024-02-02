# Getters and setters

We saw in [private properties](./private-properties) that public methods can
allow users to work with private properties in a controlled way.

Javascript has an interesting piece of syntax which some people prefer. We'll
discuss it in the guide.

## Refactoring the smart light

Let's revisit our smart light class:

```js
class SmartLight {
  #color
  #brightness
  constructor(color, brightness) {
    this.#color = color
    this.#brightness = brightness
    this.isOn = false
  }

  getBrightness() {
    return `${this.#brightness}%`
  }

  setBrightness(level) {
    if (level < 0 || level > 100) {
      console.log('Brightness must be between 0 and 100')
    } else {
      this.#brightness = level
      console.log(`Brightness set to ${this.#brightness}.`)
    }
  }
}
```

## Defining getters and setters

Because the methods are concerned with getting and setting a property, they
could be refactored to make use of javascript's special `get` and `set` keywords
like this:

```js{10,14}
class SmartLight {
  #color
  #brightness
  constructor(color, brightness) {
    this.#color = color
    this.#brightness = brightness
    this.isOn = false
  }
  // [!code focus:13]
  get brightness() {
    return `${this.#brightness}%`
  }

  set brightness(level) {
    if (level < 0 || level > 100) {
      console.log('Brightness must be between 0 and 100')
    } else {
      this.#brightness = level
      console.log(`Brightness set to ${this.#brightness}.`)
    }
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

::: code-group

```js
const bathroomLight = new SmartLight('amber', 50)

// this will fail, it calls "set .brightness(104)"
bathroomLight.brightness = 104

// but this is ok, it calls "set .brightness(50)"
bathroomLight.brightness = 50

// this calls "get brightness()"
console.log(bathroomLight.brightness)
```

```console [output]
Brightness must be between 0 and 100
Brightness set to 50.
50%
```

:::

It is not necessary to use this special syntax, it comes down to style and
preference. So long as your class is well documented and other developers can
use it, that is what's important.
