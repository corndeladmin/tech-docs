# Functions

<Vimeo id="1005489718" />

## Defining a method

In Java, functions are defined as methods within a class. Here's the basic
syntax for defining a method:

```java
public class Main {
    // Define a method
    public static void anyNameYouWant() {
        // code to be executed goes here
        String msg = "No copy pasting needed!";
        System.out.println(msg);
    }
}
```

## Using a method

To use the method elsewhere in our code, we call its name followed by
parentheses `()`.

::: code-group

```java
public class Main {
    // Define the method once
    public static void anyNameYouWant() {
        String msg = "No copy pasting needed!";
        System.out.println(msg);
    }

    public static void main(String[] args) {
        // Use the method many times
        anyNameYouWant();
        anyNameYouWant();
        anyNameYouWant();
    }
}
```

```console [output]
No copy pasting needed!
No copy pasting needed!
No copy pasting needed!
```

:::

## Return values

The `return` statement allows a method to return a value.

::: code-group

```java
public class Main {
    // Method to create a random ID
    public static int createId() {
        int id = (int) (Math.pow(10, 3) + Math.floor(Math.random() * (Math.pow(10, 4) - Math.pow(10, 3))));
        return id;
    }

    public static void main(String[] args) {
        int userId = createId();
        int bookId = createId();
        int roomId = createId();

        System.out.println(userId);
        System.out.println(bookId);
        System.out.println(roomId);
    }
}
```

```console [output]
2289
6671
8274
```

:::
