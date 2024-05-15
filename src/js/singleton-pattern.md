# Singleton pattern

<Vimeo id="123" />

## Purpose

The singleton pattern ensures that at most one instance of a class can be
created.

For example, we might have a `SmartHomeSettings` class containing things like
the name of the smart home, the security mode, and so on. We would only want one
of these objects to exist at any one time, otherwise we could have conflicting
settings.

## Implementation

In javascript, the singleton pattern is extremely simple. We can just create an
object literal:

```js
const smartHomeSettings = {
  homeName: 'Mojo Dojo',
  securityMode: 2
}
```

However, we can implement the singleton pattern in a traditional class-based
way:

::: code-group

```js [SmartHomeSettings.js]
class SmartHomeSettings {
  static instance

  constructor(name) {
    if (SmartHomeSettings.instance) {
      throw new Error('A settings object already exists.')
    } else {
      this.homeName = name
      SmartHomeSettings.instance = this
    }
  }
}

// create a singleton instance
const s1 = new SmartHomeSettings('Mojo Dojo')
console.log(s1)

// retrieve the instance again
console.log(SmartHomeSettings.instance)
console.log(s1 === SmartHomeSettings.instance) // true

// try to make a new instance
const s2 = new SmartHomeSettings('Casa House') // error
```

```console [output]
SmartHomeSettings { homeName: 'Mojo Dojo' }
SmartHomeSettings { homeName: 'Mojo Dojo' }
true
file:///home/shai/Repos/corndel/smart-home/models/SmartHomeSettings.js:6
      throw new Error('A settings object already exists.')
            ^

Error: A settings object already exists.
```

:::

This would allow us to benefit from class syntax such as private properties,
etc.
