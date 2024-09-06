# Inheritance

<Vimeo id="123" />

## Creating a parent class

If we want to create a set of classes that share some common functionality, we
should create a parent class. This parent class will contain the shared
functionality, and the child classes will inherit from it.

```java
public class SmartDevice {
    protected boolean isOn;

    public SmartDevice() {
        this.isOn = false;
    }

    public void togglePower() {
        this.isOn = !this.isOn;
    }
}
```

::: info

The `protected` access modifier means that `isOn` is accessible by any
subclasses of this parent class.

If we changed it to `private`, then subclasses would be unable to access it (but
they would still be able to manipulate it through the parent class' public
methods).

:::

## Inheriting from a parent class

To inherit from a parent class, we use the `extends` keyword, and then call the
parent class's constructor in the child class's constructor using `super()`.

::: code-group

```java [SmartCamera.java]
public class SmartCamera extends SmartDevice {
    private String location;
    private int batteryLife;

    public SmartCamera(String location) {
        super(); // Call the parent class constructor
        this.location = location;
        this.batteryLife = 100;
    }
}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        SmartCamera poolCam = new SmartCamera("Pool House");
        poolCam.togglePower();
        System.out.println(poolCam.isOn) // true
    }
}
```

:::

Notice that the `SmartCamera` class has access to the `togglePower()` method and
the `isOn` property, even though we didn't define them in the `SmartCamera`
class. This is because `SmartCamera` inherits from `SmartDevice`.

## Abstract classes

It is possible to create an instance of `SmartDevice` directly:

```java
SmartDevice device = new SmartDevice()
```

If this isn't desirable, we can make the `SmartDevice` class into an `abstract`
class.

```java{1}
public abstract class SmartDevice {
    protected boolean isOn;

    public SmartDevice() {
        this.isOn = false;
    }

    public void togglePower() {
        this.isOn = !this.isOn;
    }
}
```

Now, attempting to instantiate `SmartDevice` directly will result in an error:

```java
SmartDevice device = new SmartDevice() // Error
```
