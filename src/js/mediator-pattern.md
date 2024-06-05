# The mediator pattern

<Vimeo id="123" />

## Purpose

The mediator pattern allows us to get different classes working together in
harmony. Think of it like an air traffic controller, making sure the right plane
lands on the right runway, rather than letting the planes try to communicate
with each other.

## Implementation

Let's suppose that when a camera detects motion, it turns on the lights in the
room it is in.

Rather than letting the camera interact with the lights directly, we can add
some mediator functionality to the `SmartHome` class.

```js
class SmartHome {
  constructor() {
    this.devices = []
  }

  addDevice(device) {
    this.devices.push(device)
  }

  motionDetected(location) {
    this.devices
      .filter(device => device.type === 'light')
      .filter(light => light.location === location)
      .forEach(light => light.turnOn())
  }
}
```

Now, we can ensure that devices are all registered in the same smart home:

```js
class SmartDevice {
  constructor() {
    this.smartHome = null
  }

  register(smartHome) {
    smartHome.addDevice(this)
    this.smartHome = smartHome
  }
}
```

Finally, we could add a method for the cameras to notify lights, using the smart
home as a mediator:

```js
class SmartCamera {
  constructor(location) {
    this.location = location
  }

  detectMotion() {
    this.startRecording()
    smartHome.motionDetected(this.location)
  }
}
```

The benefit is that cameras and lights themselves don't know or care whether
they're in the same room. We don't need to write any logic to tell each camera
when a new light is added, and so on. It's all taken care of through the
mediating `motionDetected()` method.
