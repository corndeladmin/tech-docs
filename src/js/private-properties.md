# Private properties

<Vimeo id="933311015" />

## Defining private properties

Private properties in JavaScript are defined by prefixing the property name with
a hash (`#`). This syntax ensures that the property cannot be accessed or
modified directly from outside the class.

::: code-group

```js{2,6}
class SmartLight {
  #brightness // declare private property

  constructor(color, brightness) {
    this.color = color
    this.#brightness = brightness
    this.isOn = false
  }
}

const bathroomLight = new SmartLight('amber', 50)
console.log(bathroomLight)
```

```console [output]
SmartLight { isOn: false }
```

:::

Notice that the `brightness` property is not logged to the console.

## Private properties cannot be accessed directly

If we try and modify these properties directly, we will get an error:

::: code-group

```js
bathroomLight.#brightness = 90
```

```console [output]
bathroomLight.#brightness = 90
              ^
SyntaxError: Private field '#color' must be declared in an enclosing class
```

:::

## Using private properties

Since private properties cannot be accessed directly from outside the class, we
need to provide public _methods_ to work with them.

```js{9-15,17-23}
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
