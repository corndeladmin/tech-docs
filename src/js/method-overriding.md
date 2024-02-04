# Method overriding

Inheritance allows a class to inherit properties and methods from another class.
Method overriding is a feature that enables a subclass to provide a specific
implementation of a method that is already defined in its superclass. This guide
will walk you through creating a child class which inherits from a parent class
and overrides a method to better suit its needs.

## Parent class

Let's again use the `SmartDevice` parent class we created when we studied
[inheritance](./inheritance).

```js
class SmartDevice {
  constructor(name) {
    this.name = name
    this.isConnected = false
  }

  connect() {
    this.isConnected = true
    console.log(`${this.name} is now connected.`)
  }
}
```

## Child class

The `SmartCamera` inherits from the `SmartDevice` class.

::: code-group

```js
class SmartCamera extends SmartDevice {
  constructor(name, location) {
    super(name) // call the SmartDevice constuctor
    this.location = location
    this.batteryLife = 100
  }
}

const doorCam = new SmartCamera('Snoopy', 'Front Door')
doorCam.connect()
console.log(doorCam)
```

```console [output]
Snoopy is now connected.

SmartCamera {
  name: 'Snoopy',
  isConnected: true,
  location: 'Front Door',
  batteryLife: 100
}

```

:::
