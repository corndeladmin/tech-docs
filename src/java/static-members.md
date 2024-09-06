# Static properties

<Vimeo id="123" />

## Defining static properties

Let's add a static property to our camera class which holds information about
the IP range cameras are allowed to use.

::: code-group

```java{2} [SmartCamera.java]
public class SmartCamera {
    public static String networkPrefix = "192.168.12";

    private String location;
    private int batteryLife;

    public SmartCamera(String location) {
        this.location = location;
        this.batteryLife = 100;
    }
}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        System.out.println(SmartCamera.networkPrefix); // 192.168.12
    }
}
```

:::

The `networkPrefix` property is accessed from the class itself, not an instance
of the class. This ensures that all camera IP addresses begin with `192.168.12`.

## Using static properties

Often, we want to use static properties from within the class. We can do this by
referencing the class itself inside the class.

::: code-group

```java{13-17} [SmartCamera.java]
public class SmartCamera {
    public static String networkPrefix = "192.168.12";
    public static int host = 1;

    private String location;
    private int batteryLife;
    private String ipAddress;

    public SmartCamera(String location) {
        this.location = location;
        this.batteryLife = 100;

        // assign an IP address
        this.ipAddress = SmartCamera.networkPrefix + "." + SmartCamera.host;

        // increment host number for the next camera
        SmartCamera.host++;
    }

    public getIpAddress() {
      return this.ipAddress;
    }
}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        SmartCamera gardenCam = new SmartCamera("Garden");
        SmartCamera loungeCam = new SmartCamera("Living Room");

        System.out.println(gardenCam.getIpAddress()); // 192.168.12.1
        System.out.println(loungeCam.getIpAddress()); // 192.168.12.2
    }
}
```

:::

## Static methods

Classes can have static methods too! This is useful for defining actions that
affect the whole class of cameras. For example, resetting the IP range.

::: code-group

```java{9-11} [SmartCamera.java]
public class SmartCamera {
    public static String networkPrefix = "192.168.12";
    public static int host = 1;

    private String location;
    private int batteryLife;
    private String ipAddress;

    public static void resetHost() {
        SmartCamera.host = 1;
    }

    public SmartCamera(String location) {
        this.location = location;
        this.batteryLife = 100;
        this.ipAddress = SmartCamera.networkPrefix + "." + SmartCamera.host;
        SmartCamera.host++;
    }

}
```

```java [Main.java]
public class Main {
    public static void main(String[] args) {
        SmartCamera gardenCam = new SmartCamera("Garden");
        SmartCamera loungeCam = new SmartCamera("Living Room");
        System.out.println(SmartCamera.host); // 3

        // Resetting the host
        SmartCamera.resetHost();
        System.out.println(SmartCamera.host); // 3
    }
}
```

:::
