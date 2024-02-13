# Classes and instances

In programming, a **class** is like a blueprint for creating objects. These
objects are known as **instances** of the class. Using a class for object
creation means objects are created the same way every time, which helps us
adhere to DRY (don't repeat yourself) principles.

## Defining a class

Let's imagine we're writing software to manage smart home devices. We're going
to be managing lots of smart lights, so we should make a class which will serve
as a blueprint for every smart light in the home.

```js
class SmartLight {
  // class implementation goes here
}
```

As you can see, we use the `class` keyword followed by the desired name of the
class. In javascript, we capitalise the first letter of class names.

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
have any properties yet. They are empty objects. Let's change that!

## Constructor function

A **constructor** is a special function inside a class that sets up new objects.
It's where we initialise properties.

```js
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
  }
}
```

Inside the constructor, we can't refer to the instances as `kitchenLight` or
`bedroomLight` because they're still under construction! That's what the `this`
key word is for: it refers to the current instance under production inside the
class. Think of `this` as an unfinished smart light on the production line -
we're adding things to it as we go.

## Providing properties

We can pass values to the constructor when we create new instances. This is what
it looks like:

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

### Instances are objects

An instance of a class is just a javascript object, which means all of the
normal stuff you can do with objects still works.

::: code-group

```js
class SmartLight {
  constructor(color, brightness) {
    this.color = color
    this.brightness = brightness
  }
}

const kitchenLight = new SmartLight('warm white', 75)

// access properties with dot notation
console.log(kitchenLight.color)

// update properties
kitchenLight.brightness = 20
console.log(kitchenLight.brightness)
```

```console [output]
warm white
20
```

:::

## Additional properties

There is no reason why all properties need to be passed to the constructor as
arguments. The constructor can add extra properties. This is useful for adding
default values that aren't intended to be provided by the creator of the
instance.

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
