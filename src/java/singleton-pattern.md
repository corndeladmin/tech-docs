# Singleton pattern

## Purpose

The singleton pattern ensures that at most one instance of a class can be
created.

For example, we might have a `SmartHome` class containing things like the name
of the smart home, a list of devices, and so on. We would only want one of these
objects to exist at any one time, otherwise we could have conflicting settings.

## Implementation

In Java, the Singleton pattern is typically implemented by making the
constructor private and providing a static method to access the single instance:

```java{2,11-18}
public class SmartHome {
    private static SmartHome instance;
    private String homeName;
    private int securityMode;

    private SmartHome(String name, int mode) {
        this.homeName = name;
        this.securityMode = mode;
    }

    public static SmartHome getInstance(String name, int mode) {
        if (instance == null) {
            instance = new SmartHome(name, mode);
        } else {
            System.out.println("A smart home already exists.");
        }
        return instance;
    }

    // Additional methods...
}

```

Now, only one instance of `SmartHome` can be created, and subsequent calls to
`getInstance` will return the existing instance.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        // Create an instance
        SmartHome smartHome = SmartHome.getInstance("Mojo Dojo", 2);
        System.out.println(smartHome.getHomeName());

        // Retrieve the instance again
        SmartHome sameHome = SmartHome.getInstance("Casa House", 1);
        System.out.println(sameHome.getHomeName());
        System.out.println(smartHome == sameHome); // true

        // Attempt to create a new instance directly (will cause a compile-time error)
        SmartHome secondHome = new SmartHome("Another Home", 3);
        // Error: constructor is private
    }
}
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
