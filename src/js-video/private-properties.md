# Private properties

In object-oriented programming, encapsulation is a core principle that involves
bundling the data (properties) and methods that operate on the data into a
single unit, or class, and restricting access to some of the object's
components. Private properties are a way to enforce encapsulation in JavaScript.
They are properties accessible only within the class that declares them, making
them invisible to any code outside that class.

## Understanding Private Properties

Private properties in JavaScript are defined by prefixing the property name with
a hash (`#`). This syntax ensures that the property cannot be accessed or
modified directly from outside the class.

### Why Use Private Properties?

- **Encapsulation**: They help in keeping certain details of an object hidden
  from the outside world.
- **Control**: They provide control over how a property is accessed or modified
  through public methods.
- **Security**: They make it harder to access data.

## Defining private properties

Let's refactor our `SmartLight` class to benefit from private properties.

::: code-group

```js
class SmartLight {
  #color
  #brightness
  constructor(color, brightness) {
    this.#color = color
    this.#brightness = brightness
    this.isOn = false // Public property for simplicity
  }
}

const bathroomLight = new SmartLight('amber', 50)
console.log(bathroomLight)
```

```console [output]
SmartLight { isOn: false }
```

:::

Notice that the output only displays the `isOn` property - `color` and
`brightness` are no longer accessible.

If we try and modify these properties directly, we will get an error:

::: code-group

```js
bathroomLight.#color = 'ice blue'
```

```console [output]
bathroomLight.#color = 'ice blue'
             ^

SyntaxError: Private field '#color' must be declared in an enclosing class
    at internalCompileFunction (node:internal/vm:73:18)
    at wrapSafe (node:internal/modules/cjs/loader:1153:20)
    at Module._compile (node:internal/modules/cjs/loader:1197:27)
    at Module._extensions..js (node:internal/modules/cjs/loader:1287:10)
    at Module.load (node:internal/modules/cjs/loader:1091:32)
    at Module._load (node:internal/modules/cjs/loader:938:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12)
    at node:internal/main/run_main_module:23:47
```

:::

## Using private properties

Since private properties cannot be accessed directly from outside the class, we
need to provide public _methods_ to work with them.

::: code-group

```js
class SmartLight {
  #color
  #brightness
  constructor(color, brightness) {
    this.#color = color
    this.#brightness = brightness
    this.isOn = false // Public property for simplicity
  }
  // [!code focus:8]
  getColor() {
    return this.#color
  }

  setColor(newColor) {
    this.#color = newColor
    console.log(`Color set to ${this.#color}.`)
  }
}
// [!code focus:4]
const bathroomLight = new SmartLight('amber', 50)
console.log(bathroomLight.getColor())
bathroomLight.setColor('neon green')
```

```console [output]
amber
Color set to neon green.
```

:::

## What is the point?

By now, you are probably wondering why bother with all this? It's a fair
question - we can read and write properties with our public methods just the
same as if we accessed them directly.

In the next example, though, we will see that private properties with public
methods allow us to control **how** people interact with the object.

::: code-group

```js
class SmartLight {
  #color
  #brightness
  constructor(color, brightness) {
    this.#color = color
    this.#brightness = brightness
    this.isOn = false // Public property for simplicity
  }
  // [!code focus:13]
  getBrightness() {
    return `${this.#brightness}%`
  }

  setBrightness(level) {
    if (level < 0 || level > 100) {
      console.log('Brightness must be between 0 and 100.')
    } else {
      this.#brightness = level
      console.log(`Brightness set to ${this.#brightness}.`)
    }
  }
}
// [!code focus:5]
const bathroomLight = new SmartLight('amber', 50)
bathroomLight.setBrightness(104)
bathroomLight.setBrightness(50)
console.log(bathroomLight.getBrightness())
```

```console [output]
Brightness must be between 0 and 100.
Brightness set to 50.
50%
```

:::

The `.getBrightness()` method formats the return value with a `%` symbol.
Although the brightness is stored privately as an integer, which is more
convenient for internal class operations like adjusting the brightness, it is
displayed publicly as a formatted string, which is better for presentation.

The `.setBrightness()` method prevents the user from setting the brightness
level to a value outside `0` to `100`. We allow the brightness to be modified,
but we've taken control over _how_ it can be modified as the user cannot
directly overwrite the property with an invalid number.
