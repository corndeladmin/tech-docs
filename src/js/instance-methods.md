# Instance methods

<Vimeo id="933311098" />

Instance methods are functions defined inside a class that operate on instances
of the class. They can access and modify the instance's properties, accept
parameters, return values, and even call other methods.

## Defining a method

Let's start by adding a simple method `.togglePower()` to toggle our smart light
on and off.

```js{8-10}
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
    this.isOn = false
  }

  togglePower() {
    this.isOn = !this.isOn
  }
}

const kitchenLight = new SmartLight('warm white', 75)

kitchenLight.togglePower() // on
kitchenLight.togglePower() // off
```

## Methods with parameters

Methods can take parameters to allow more dynamic operations.

```js{12-14}
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
    this.isOn = false
  }

  togglePower() {
    this.isOn = !this.isOn
  }

  changeColor(newColor) {
    this.color = newColor
  }
}

const kitchenLight = new SmartLight('warm white', 75)
kitchenLight.changeColor('lava red')
```

## Returning values

Methods can return values as well.

```js{16-22}
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
    this.isOn = false
  }

  togglePower() {
    this.isOn = !this.isOn
  }

  changeColor(newColor) {
    this.color = newColor
  }

  currentBrightness() {
    if (this.isOn) {
      return this.brightness
    } else {
      return 0
    }
  }
}

const kitchenLight = new SmartLight('warm white', 75)
console.log(kitchenLight.currentBrightness()) // 0

kitchen.togglePower()
console.log(kitchenLight.currentBrightness()) // 75
```

## Calling other methods

The last thing we need to know about methods is that they can call each other
using the `this` key word.

::: code-group

```js{26-33}
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

  factoryReset() {
    this.changeColor('white')
    this.brightness = 100

    if (this.isOn) {
      this.togglePower()
    }
  }
}

// make a light and turn it on
const bedroomLight = new SmartLight('cool blue', 50)
bedroomLight.togglePower()

// reset it
bedroomLight.factoryReset()
console.log(bedroomLight)
```

```console [output]
SmartLight { color: 'white', brightness: 100, isOn: false }
```

:::

Notice that the `.factoryReset()` method calls `this.changeColor()` and
`this.togglePower()`.
