# Parameters

<Vimeo id="1005489683" />

## Defining parameters

A parameter is a placeholder for a value which will be supplied later. In Java,
parameters are defined in the method signature.

```java
public class Main {
    // Define a method with parameters
    public static int addNumbers(int x, int y) {
        return x + y;
    }
}
```

## Using parameters

When calling a method, we provide arguments for the parameters.

::: code-group

```java
public class Main {
    // Define the method with parameters
    public static int addNumbers(int x, int y) {
        return x + y;
    }

    public static void main(String[] args) {
        // Using the method with arguments
        System.out.println(addNumbers(2, 3));
        System.out.println(addNumbers(14, -20));

        // Even like this
        int a = 134;
        int b = 201;
        System.out.println(addNumbers(a, b));
    }
}
```

```console [output]
5
-6
335
```

:::

## Early return

The `return` keyword can end a method early, just like in JavaScript.

::: code-group

```java
public class Main {
    // Method demonstrating early return
    public static boolean logInUser() {
        // this will get printed
        System.out.println("User is logged in.");

        // the function stops here (early return)
        return true;

        // this code will never run
        // System.out.println("awww :(");
    }

    public static void main(String[] args) {
        logInUser();
    }
}
```

```console [output]
User is logged in.
```

:::
