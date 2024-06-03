# Classes and instances

<Vimeo id="933311165" />

In programming, a **class** is like a blueprint for creating objects. These
objects are known as **instances** of the class. Using a class for object
creation means objects are created the same way every time, which helps us
adhere to DRY (don't repeat yourself) principles.

## Defining a class

We create a class using the `class` keyword.

```js
class SmartLight {
  // class implementation goes here
}
```

In javascript, it is conventional capitalise the first letter of class names.

## Creating instances

To create a smart light instance from this blueprint, we use the `new` keyword
like this:

::: code-group

```js
class SmartLight {
  // class implementation goes here
}

const kitchenLight = new SmartLight()
const bedroomLight = new SmartLight()

console.log(kitchenLight)
console.log(bedroomLight)
```

```console [output]
SmartLight {}
SmartLight {}
```

:::

The output shows us that we have two instances of `SmartLight`. But they don't
have any properties yet. They are empty objects.

## Constructor function

A **constructor** is a special function inside a class that sets up new objects.
It's where we initialise properties.

::: code-group

```js
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
  }
}

const kitchenLight = new SmartLight('warm white', 75)
const bedroomLight = new SmartLight('cool blue', 50)

console.log(kitchenLight)
console.log(bedroomLight)
```

```console [output]
SmartLight { color: 'warm white', brightness: 75 }
SmartLight { color: 'cool blue', brightness: 50 }
```

:::

Think of `this` as an unfinished smart light on the production line - we're
adding things to it as we go.

## Additional properties

The constructor can add properties that are not passed in as arguments.

::: code-group

```js
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
    this.isOn = false // lights are off by default
  }
}

const kitchenLight = new SmartLight('warm white', 75)

console.log(kitchenLight)
```

```console [output]
SmartLight {
  color: 'warm white',
  brightness: 75,
  isOn: false
}
```

:::
