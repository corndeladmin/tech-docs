# Inheritance

Inheritance enables you to create a new class that is based on an existing
class. The new class inherits the properties and methods of the existing class.
This existing class is often referred to as the parent class, superclass, or
base class, while the new class is known as the child class, subclass, or
derived class.

## Understanding Inheritance

The primary benefit of inheritance is code reuse. You can define common
functionality in a parent class and then extend this class to create child
classes that inherit this functionality, adding or overriding properties and
methods as needed.

## Example Scenario

Let's continue with our smart home theme. Imagine we have a general
`SmartDevice` class that defines properties and methods common to all smart
devices, like connectivity status or device name. We can then create more
specific device classes (like `SmartLight` or `SmartCamera`) that inherit from
`SmartDevice` and add their unique features.

## Creating a parent class

First, we define our parent class, `SmartDevice`, with some basic properties and
methods.

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

  disconnect() {
    this.isConnected = false
    console.log(`${this.name} is now disconnected.`)
  }
}
```

We don't intend to use this class to directly create objects, but we'll use it
as a starting point to build our more specific classes.

## Inheriting from a parent class

Next, we create a child class that inherits from `SmartDevice`. We use the
`extends` keyword for inheritance in JavaScript.

An important step is calling the special `super()` function inside the child's
`constructor()`. The `super()` function calls the parent's constructor, which is
necessary to set up shared properties like `name` and `isConnected`.

::: code-group

```js
class SmartLight extends SmartDevice {
  constructor(name, color) {
    super(name) // Calls parent's constructor with the name parameter
    this.color = color
  }

  changeColor(newColor) {
    this.color = newColor
    console.log(`${this.name}'s color changed to ${this.color}.`)
  }
}

const studyLight = new SmartLight('Epic Lamp', 'yellow')
console.log(studyLight)

// use the inherited .connect() method
studyLight.connect()

// use the child-specific .changeColor() method
studyLight.changeColor('ochre')
```

```console [output]
SmartLight { name: 'Epic Lamp', isConnected: false, color: 'yellow' }
Epic Lamp is now connected.
Epic Lamp's color changed to ochre.
```

:::

Because we have used `extends` and `super()`, we now have access to all
`SmartDevice` functionality on our `SmartLight`. Neat!

The next step would be to create a `SmartCamera` class which also inherits from
`SmartDevice`. Each child class doesn't need to implement things like `name` and
`connect()`, meaning we do not repeat and have to maintain all the repeated
code.
