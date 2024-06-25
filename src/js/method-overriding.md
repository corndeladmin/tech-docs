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
    super(name) // call the SmartDevice constructor
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

## Overriding a method

It'd be useful if the `connect()` method also logged the battery life of the device! We can do this by overriding the `connect()` method.

::: code-group

```js{8,9,10,11,12}
class SmartCamera extends SmartDevice {
  constructor(name, location) {
    super(name)
    this.location = location
    this.batteryLife = 100
  }

  connect() {
    this.isConnected = true
    console.log(`${this.name} is now connected.`)
    console.log(`Battery is at ${this.batteryLife}%`)
  }
}

const doorCam = new SmartCamera('Snoopy', 'Front Door')
doorCam.connect()
console.log(doorCam)
```

```console [output]
Snoopy is now connected.
Battery is at 100%

SmartCamera {
  name: 'Snoopy',
  isConnected: true,
  location: 'Front Door',
  batteryLife: 100
}
```

:::

### Using `super()`

We can see that the first two lines of code in the `connect()` method are the same as its overridden method. There should be a way to avoid duplicating this code!

```js{9,10,12}
class SmartCamera extends SmartDevice {
  constructor(name, location) {
    super(name)
    this.location = location
    this.batteryLife = 100
  }

  connect() {
    // These two lines are duplicates of the lines in the parent class!
    this.isConnected = true
    console.log(`${this.name} is now connected.`)

    console.log(`Battery is at ${this.batteryLife}%`)
  }
}
```

We can use the `super()` method, as seen in the constructor, to call the _overridden_ method from the `SmartDevice` class. So, our `SmartCamera` `connect()` method becomes this:

```js{9,10}
class SmartCamera extends SmartDevice {
  constructor(name, location) {
    super(name)
    this.location = location
    this.batteryLife = 100
  }

  connect() {
    // We call the SmartCamera connect() method by calling super() 
    super()

    console.log(`Battery is at ${this.batteryLife}%`)
  }
}
```
