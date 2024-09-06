# Private members

<Vimeo id="123" />

## Defining private properties

In Java, private are defined by using the `private` access modifier. This
ensures that the property cannot be accessed or modified directly from outside
the class.

```java{2-4}
public class SmartLight {
    private int brightness; // declare private property
    private String color;
    private boolean isOn;

    public SmartLight(String color, int brightness) {
        this.color = color;
        this.brightness = brightness;
        this.isOn = false;
    }

}
```

## Private properties cannot be accessed directly

If we try to modify private properties directly, we will get an error because
Java enforces access control at compile time:

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        SmartLight bathroomLight = new SmartLight("amber", 50);
        bathroomLight.brightness = 90; // Error
    }
}
```

```output
Error: brightness has private access in SmartLight
```

:::

## Using private properties

Since private properties cannot be accessed directly from outside the class, we
need to provide public _methods_ to work with them.

::: code-group

```java{11-17,19-24} [SmartLight.java]
public class SmartLight {
    private int brightness;
    private String color;
    private boolean isOn;

    public SmartLight(String color, int brightness) {
        this.color = color;
        this.brightness = brightness;
    }

    public int getBrightness() {
        if (this.isOn) {
            return this.brightness;
        } else {
            return 0;
        }
    }

    public void setBrightness(int newBrightness) {
        if (newBrightness < 0 || newBrightness > 100) {
            throw new IllegalArgumentException("Brightness must be between 0 and 100");
        }
        this.brightness = newBrightness;
    }

}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        SmartLight bedroomLight = new SmartLight("cool blue", 50);
        bedroomLight.setBrightness(90);
        System.out.println(bedroomLight.getBrightness()); // 90
    }
}
```

:::

In this example, `getBrightness()` and `setBrightness()` are public methods that
allow controlled access to the private `brightness` property.
