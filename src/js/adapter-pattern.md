# The adapter pattern

## Purpose

The adapter pattern allows us to create a new interface around an existing
class. This is useful when a class has the behaviours we need, but they're
implemented in a way that isn't compatible with the rest of our software.

For example, we might have legacy code for older smart lights:

```js
class OldLight {
  constructor() {
    this.power = 1
  }

  on() {
    this.power = 1
  }

  off() {
    this.power = 0
  }
}
```

Using the adapter pattern, we can wrap this old code in an adapter so that we
expose an `isOn` property and a `togglePower()` method, bringing it in line with
the newer `SmartLight` class.

## Implementation

We create an adapter class which accepts an instance of `OldLight`, and
interacts with this instance to replicate the newer `SmartLight` interface.

```js
class LightAdapter {
  #oldLight
  constructor(oldLight) {
    oldLight.off() // make sure it's off by default
    this.#oldLight = oldLight
  }

  get isOn() {
    return this.#oldLight.power === 1
  }

  togglePower() {
    if (this.isOn) {
      this.#oldLight.off()
    } else {
      this.#oldLight.on()
    }
  }
}
```

Now, we can wrap an old light in the adapter so that its interface is identical
to a smart light.

```js
const oldLight = new OldLight()
const adaptedLight = new LightAdapter(oldLight)

console.log(adaptedLight.isOn) // false
adaptedLight.togglePower()
console.log(adaptedLight.isOn) // true
```
