# Instance Methods

<Vimeo id="123" />

Instance methods are functions defined inside a class that operate on instances
of the class. They can access and modify the instance's properties, accept
parameters, return values, and even call other methods.

## Defining a Method

Let's start by adding a simple method `togglePower()` to toggle our smart light
on and off.

::: code-group

```java{12-14} [SmartLight.java]
public class SmartLight {
    public String color;
    public int brightness;
    public boolean isOn;

    public SmartLight(String color, int brightness) {
        this.color = color;
        this.brightness = brightness;
        this.isOn = false;
    }

    public void togglePower() {
        this.isOn = !this.isOn;
    }
}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        SmartLight kitchenLight = new SmartLight("warm white", 75);

        kitchenLight.togglePower(); // on
        kitchenLight.togglePower(); // off
    }
}
```

:::

## Methods with Parameters

Methods can take parameters to allow more dynamic operations.

::: code-group

```java{16-18} [SmartLight.java]
public class SmartLight {
    public String color;
    public int brightness;
    public boolean isOn;

    public SmartLight(String color, int brightness) {
        this.color = color;
        this.brightness = brightness;
        this.isOn = false;
    }

    public void togglePower() {
        this.isOn = !this.isOn;
    }

    public void changeColor(String newColor) {
        this.color = newColor;
    }
}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        SmartLight kitchenLight = new SmartLight("warm white", 75);
        kitchenLight.changeColor("lava red");
    }
}
```

:::

## Returning Values

Methods can return values as well.

::: code-group

```java{20-26} [SmartLight.java]
public class SmartLight {
    public String color;
    public int brightness;
    public boolean isOn;

    public SmartLight(String color, int brightness) {
        this.color = color;
        this.brightness = brightness;
        this.isOn = false;
    }

    public void togglePower() {
        this.isOn = !this.isOn;
    }

    public void changeColor(String newColor) {
        this.color = newColor;
    }

    public int currentBrightness() {
        if (this.isOn) {
            return this.brightness;
        } else {
            return 0;
        }
    }
}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        SmartLight kitchenLight = new SmartLight("warm white", 75);
        System.out.println(kitchenLight.currentBrightness()); // 0

        kitchenLight.togglePower();
        System.out.println(kitchenLight.currentBrightness()); // 75
    }
}
```

:::

## Calling Other Methods

The last thing we need to know about methods is that they can call each other
using the `this` keyword.

::: code-group

```java{26-33} [SmartLight.java]
public class SmartLight {
    public String color;
    public int brightness;
    public boolean isOn;

    public SmartLight(String color, int brightness) {
        this.color = color;
        this.brightness = brightness;
        this.isOn = false;
    }

    public void togglePower() {
        this.isOn = !this.isOn;
        System.out.println("Light is now " + (this.isOn ? "on" : "off") + ".");
    }

    public void changeColor(String newColor) {
        this.color = newColor;
        System.out.println("Light color changed to " + this.color + ".");
    }

    public int currentBrightness() {
        return this.isOn ? this.brightness : 0;
    }

    public void factoryReset() {
        this.changeColor("white");
        this.brightness = 100;

        if (this.isOn) {
            this.togglePower();
        }
    }
}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        // make a light and turn it on
        SmartLight bedroomLight = new SmartLight("cool blue", 50);
        bedroomLight.togglePower();

        // reset it
        bedroomLight.factoryReset();
        System.out.println(bedroomLight.color); // "white"
        System.out.println(bedroomLight.brightness); // 100
        System.out.println(bedroomLight.isOn); // false
    }
}
```

:::

Notice that the `factoryReset()` method calls `this.changeColor()` and
`this.togglePower()`.
