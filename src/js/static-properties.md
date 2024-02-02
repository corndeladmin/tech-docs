# Static properties

Static properties and methods in JavaScript provide a way for you to add
properties and functions to classes themselves, rather than to instances of
those classes. This feature is incredibly useful for utility functions,
constants, or any data and methods that should be shared across all instances of
a class.

## Understanding static properties

Static properties are part of the class definition itself. They are accessed
using the class name, _not_ an instance of the class. This makes them ideal for
utility functions or data that is common to all instances of a class.

Why Use Static Properties and Methods?

- **Utility methods**: Perfect for utility or helper functions that don't
  require access to instance data.
- **Constants**: Useful for defining constants related to the class.
- **Singleton patterns**: Can assist in implementing singleton patterns by
  ensuring only one instance of the class can be created.

## Identifying static properties

Let's say we're adding some smart cameras to our smart home system.

::: code-group

```js
class SmartCamera {
  constructor(location) {
    this.location = location
    this.batteryLife = 100 // charged by default
  }
}

const gardenCam = new SmartCamera('Garden')
console.log(gardenCam)
```

```console [output]
SmartCamera {
  location: 'Garden',
  batteryLife: 100
}
```

:::

Now let us suppose we need to manage assigning ip addresses to all the cameras.
Should we put this functionality on camera instances? _No_. One camera doesn't
have access to the properties of another camera, so it wouldn't know which
addresses are taken and which aren't. Because this is "meta" information about
the whole class of cameras, it belongs as a static property.

## Defining static properties

Let's add a static property to our camera class which holds information about
the ip range cameras are allowed to use.

::: code-group

```js{2,10}
class SmartCamera {
  static networkPrefix = '192.168.12'

  constructor(location) {
    this.location = location
    this.batteryLife = 100
  }
}

console.log(SmartCamera.networkPrefix)
```

```console [output]
192.168.12
```

:::

The `networkPrefix` property is accessed from the class itself, not an instance
of the class. This is intended to ensure that all camera ip addresses begin with
`192.168.12`.

## Using static properties

Often, we want to use static properties from within the class. We can do this as
normal, by using `SmartCamera` inside the class. Let's see and example.

::: code-group

```js
class SmartCamera {
  static networkPrefix = '192.168.12'
  static host = 1

  constructor(location) {
    this.location = location
    this.batteryLife = 100

    // assign an ip
    this.ipAddress = `${SmartCamera.networkPrefix}.${SmartCamera.host}`

    // increment host number for next camera
    SmartCamera.host++
  }
}

const gardenCam = new SmartCamera('Garden')
const loungeCam = new SmartCamera('Living Room')

console.log(gardenCam)
console.log(loungeCam)
```

```console{4,10} [output]
SmartCamera {
  location: 'Garden',
  batteryLife: 100,
  ipAddress: '192.168.12.1'
}

SmartCamera {
  location: 'Living Room',
  batteryLife: 100,
  ipAddress: '192.168.12.2'
}

```

:::

## Static methods

Classes can have static methods too! This is useful for defining actions which
affect the whole class of cameras. For example, resetting the ip range.

::: code-group

```js
class SmartCamera {
  static networkPrefix = '192.168.12'
  static host = 1

  static resetHost() {
    SmartCamera.host = 1
  }

  constructor(location) {
    this.location = location
    this.batteryLife = 100
    this.ipAddress = `${SmartCamera.networkPrefix}.${SmartCamera.host}`
    SmartCamera.host++
  }
}

// creating two cameras should bump host up to 3
const gardenCam = new SmartCamera('Garden')
const loungeCam = new SmartCamera('Living Room')
console.log(SmartCamera.host)

// resetting should set host back to 1
SmartCamera.resetHost()
console.log(SmartCamera.host)
```

```console [output]
3
1
```

:::
