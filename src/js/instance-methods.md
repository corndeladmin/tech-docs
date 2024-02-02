# Instance methods

Instance methods are functions defined inside a class that operate on instances
of the class. They can access and modify the instance's properties, take
parameters, return values, and even call other methods. Let's continue with our
smart home theme and enhance our `SmartLight` class.

## Defining a method

Let's start by adding a simple method `.togglePower()` to toggle our smart light
on and off.

::: code-group

```js
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
    this.isOn = false
  }
  // [!code focus:5]
  togglePower() {
    this.isOn = !this.isOn
    console.log(`Light is now ${this.isOn ? 'on' : 'off'}.`)
  }
}
// [!code focus:6]
const kitchenLight = new SmartLight('warm white', 75)

// we access methods using dot notation:
kitchenLight.togglePower()
kitchenLight.togglePower()
```

```console [output]
Light is now on.
Light is now off.
```

:::

## Methods with parameters

Methods can take parameters to allow more dynamic operations.

::: code-group

```js
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
    this.isOn = false
  }

  togglePower() {
    this.isOn = !this.isOn
    console.log(`Light is now ${this.isOn ? 'on' : 'off'}.`)
  }
  // [!code focus:5]
  changeColor(newColor) {
    this.color = newColor
    console.log(`Light color changed to ${this.color}.`)
  }
}

// [!code focus:3]
const kitchenLight = new SmartLight('warm white', 75)
kitchenLight.changeColor('lava red')
```

```console [output]
Light color changed to lava red.
```

:::

## Returning values

Methods can return values as well, which allows instances to do useful
calculations. For example, we could add a `.currentBrightness()` which returns
`0` if the light is off, otherwise it returns the brightness.

::: code-group

```js
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
    this.isOn = false
  }

  togglePower() {
    this.isOn = !this.isOn
    console.log(`Light is now ${this.isOn ? 'on' : 'off'}.`)
  }

  changeColor(newColor) {
    this.color = newColor
    console.log(`Light color changed to ${this.color}.`)
  }
  // [!code focus:8]
  currentBrightness() {
    if (this.isOn) {
      return this.brightness
    } else {
      return 0
    }
  }
}
// [!code focus:9]
const kitchenLight = new SmartLight('warm white', 75)

// check the brightness when off
console.log(kitchenLight.currentBrightness())

// now turn it on and call again
kitchen.togglePower()
console.log(kitchenLight.currentBrightness())
```

```console [output]
0
Light is now on.
75
```

:::

## Calling other methods

The last thing we need to know about methods is that they can call eachother
using the `this` key word.

::: code-group

```js
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
    this.isOn = false
  }

  togglePower() {
    this.isOn = !this.isOn
    console.log(`Light is now ${this.isOn ? 'on' : 'off'}.`)
  }

  changeColor(newColor) {
    this.color = newColor
    console.log(`Light color changed to ${this.color}.`)
  }

  currentBrightness() {
    if (this.isOn) {
      return this.brightness
    } else {
      return 0
    }
  }
  // [!code focus:10]
  factoryReset() {
    console.log('Reverting to factory settings...')
    this.changeColor('white')
    this.brightness = 100

    if (this.isOn) {
      this.togglePower()
    }
  }
}
// [!code focus:8]
// make a light and turn it on
const bedroomLight = new SmartLight('cool blue', 50)
bedroomLight.togglePower()

// reset it
bedroomLight.factoryReset()
console.log(bedroomLight)
```

```console [output]
Light is now on.

Reverting to factory settings...
Light color changed to white.
Light is now off.
SmartLight { color: 'white', brightness: 100, isOn: false }
```

:::

Notice that the `.factoryReset()` method calls `this.changeColor()` and
`this.togglePower()`.
