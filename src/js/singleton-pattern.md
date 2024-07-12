# Singleton pattern

## Purpose

The singleton pattern ensures that at most one instance of a class can be
created.

For example, we might have a `SmartHome` class containing things like the name
of the smart home, a list of devices, and so on. We would only want one of these
objects to exist at any one time, otherwise we could have conflicting settings.

## Implementation

In javascript, the singleton pattern is extremely simple. We can just create an
object literal:

```js
const smartHome = {
  homeName: 'Mojo Dojo',
  securityMode: 2
}
```

However, we can implement the singleton pattern in a traditional class-based
way:

```js
class SmartHome {
  static instance

  constructor(name, mode) {
    if (SmartHome.instance) {
      throw new Error('A smart home already exists.')
    } else {
      this.homeName = name
      this.securityMode = mode
      SmartHome.instance = this
    }
  }
}
```

Now, we are only able to create one instance of `SmartHome`.

::: code-group

```js
// create an instance
const smartHome = new SmartHome('Mojo Dojo', 2)
console.log(smartHome)

// retrieve the instance again
console.log(SmartHome.instance)
console.log(smartHome === SmartHome.instance) // true

// try to make a new instance
const secondHome = new SmartHome('Casa House', 1) // error
```

```console [output]
SmartHome { homeName: 'Mojo Dojo', securityMode: 2 }
SmartHome { homeName: 'Mojo Dojo', securityMode: 2 }
true
file:///home/shai/Repos/corndel/smart-home/models/SmartHome.js:6
      throw new Error('A settings object already exists.')
            ^

Error: A settings object already exists.
```

:::

This would allow us to benefit from class syntax such as private properties,
etc.
