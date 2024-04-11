# Inheritance

<Vimeo id="933310880" />

## Creating a parent class

If we want to create a set of classes that share some common functionality, we
should create a parent class. This parent class will contain the shared
functionality, and the child classes will inherit from it.

```js
class SmartDevice {
  constructor() {
    this.isOn = false
  }

  togglePower() {
    this.isOn = !this.isOn
  }
}
```

## Inheriting from a parent class

To inherit from a parent class, we use the `extends` keyword, and then call the
`super()` method in the child class's constructor.

::: info

The `super()` method calls the parent class's constructor, passing in any
arguments that are needed for the parent class's constructor.

:::

::: code-group

```js {1,3}
class SmartCamera extends SmartDevice {
  constructor(location) {
    super()
    this.location = location
    this.batteryLife = 100
  }
}

const poolCam = new SmartCamera('Pool House')
poolCam.togglePower()
console.log(poolCam)
```

```console [output]
SmartCamera {
  isOn: true,
  batteryLife: 100,
  location: 'Pool House'
}
```

:::

Notice that the `SmartCamera` class has access to the `togglePower()` method and
the `isOn` property, even though we didn't define them in the `SmartCamera`
class. This is because `SmartCamera` inherits from `SmartDevice`.
