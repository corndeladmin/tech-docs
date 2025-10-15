# The adapter pattern

## Purpose

The adapter pattern allows us to create a new interface around an existing
class. This is useful when a class has the behaviours we need, but they're
implemented in a way that isn't compatible with the rest of our software.

For example, we might have legacy code for older smart lights:

```js
public class OldLight {
    public int power;

    public OldLight() {
        this.power = 1;
    }

    public void on() {
        this.power = 1;
    }

    public void off() {
        this.power = 0;
    }
}
```

Using the adapter pattern, we can wrap this old code in an adapter so that we
expose an `isOn` property and a `togglePower()` method, bringing it in line with
the newer `SmartLight` interface.

## Implementation

First, let's define a common `Light` interface that the rest of our application
will use:

```java
public interface Light {
    boolean isOn();
    void togglePower();
}
```

Next, we'll implement the `LightAdapter` class, which adapts an instance of
`OldLight` to the `Light` interface:

```java
public class LightAdapter implements Light {
    private OldLight oldLight;

    public LightAdapter(OldLight oldLight) {
        oldLight.off(); // Make sure it's off by default
        this.oldLight = oldLight;
    }

    @Override
    public boolean isOn() {
        return oldLight.power == 1;
    }

    @Override
    public void togglePower() {
        if (isOn()) {
            oldLight.off();
        } else {
            oldLight.on();
        }
    }
}
```

## Usage

Now, we can use the `LightAdapter` to interact with `OldLight` instances through
the `Light` interface:

```js
public class Main {
    public static void main(String[] args) {
        OldLight oldLight = new OldLight();
        Light adaptedLight = new LightAdapter(oldLight);

        System.out.println(adaptedLight.isOn()); // false
        adaptedLight.togglePower();
        System.out.println(adaptedLight.isOn()); // true
    }
}
```

## SmartLight class

To show how the `Light` interface can be implemented by new classes, here's a
`SmartLight` class:

```java
public class SmartLight implements Light {
    private boolean power;

    public SmartLight() {
        this.power = false;
    }

    @Override
    public boolean isOn() {
        return power;
    }

    @Override
    public void togglePower() {
        power = !power;
    }
}
```

Now, both `LightAdapter` (adapting `OldLight`) and `SmartLight` can be used
interchangeably:

```java
public class Main {
    public static void main(String[] args) {
        Light smartLight = new SmartLight();
        LightAdapter adaptedLight = new LightAdapter(new OldLight());

        // Using SmartLight
        System.out.println(smartLight.isOn()); // false
        smartLight.togglePower();
        System.out.println(smartLight.isOn()); // true

        // Using Adapted OldLight
        System.out.println(adaptedLight.isOn()); // false
        adaptedLight.togglePower();
        System.out.println(adaptedLight.isOn()); // true
    }
}
```
