# The facade pattern

## Purpose

The facade pattern allows us to create a simple interface around complex
operations. The facade might provide less granular control of the underlying
system, but in return it can be much faster and simpler to work with.

Suppose we have a smart home with lots of devices, and we want a simple way of
activating "holiday mode". There are a few things we need to do with our
different devices which would be tedious for the users to do one by one. We can
solve this by adding a facade - which in this case is a single `.holidayMode()`
method.

## Implementation

Suppose our `SmartHome` class keeps track of our devices.

::: info

Although we haven't shown the code, let's assume that when a new device is
created, it is added to the `devices` array in the instance of `SmartHome`.

:::

```js
class SmartHome {
  constructor() {
    this.devices = []
  }

  holidayMode() {
    // turn on all cameras
    for (let camera of this.getDevicesByType('camera')) {
      if (!camera.isOn) camera.togglePower()
    }

    // turn off all lights
    for (let light of this.getDevicesByType('light')) {
      if (light.isOn) light.togglePower()
    }

    // set all thermostats to 5 (to prevent freezing pipes)
    for (let thermostat of this.getDevicesByType('thermostat')) {
      thermostat.setTemperature(5)
    }
  }

  getDevicesByType(type) {
    return this.devices.filter(device => device.type === type)
  }
}
```

Now, instead of having our users go and configure all of these settings
themselves, we can show them a button which calls

```js
smartHome.holidayMode()
```

The user has less overall control, but a much more convenient interface.
