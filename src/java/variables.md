# Variables

<Vimeo id="1005489989" />

::: info

When we write code in Java, it needs to be written inside something called a
`class`. This won't mean anything to you right now, but it will soon!

For now, it's enough to know that to make Java code run, it has to go inside
some boilerplate like this:

```java
public class Main {
  public static void main(String[] args) {
    // Your code goes here
  }
}
```

:::

## Using `var`

In Java, we can use `var` to create new **variables**.

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    var bookTitle = "Persepolis";
    System.out.println(bookTitle);
  }
}
```

```[output]
Persepolis
```

:::

The order of the lines matters.

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    System.out.println(bookTitle);
    var bookTitle = "Persepolis";
  }
}
```

```[output]
./Main.java:3: error: cannot find symbol
    System.out.println(bookTitle);
                       ^
  symbol:   variable bookTitle
  location: class Main
1 error
error: compilation failed
```

:::

## Specifying type

Rather than using `var`, it is generally better to give the **type** of the
variable.

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    String bookTitle = "Persepolis";
    System.out.println(bookTitle);
  }
}
```

```[output]
Persepolis
```

:::

This makes it clear to everyone reading the code that `bookTitle` contains a
string.

::: info

A **string** in programming is a sequence of text characters. There are other
types, too, such as **integers** and **booleans**. We will learn all about them
soon!

:::

## Redefining variables

Variables can be reassigned new values.

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    String bookTitle = "Persepolis";
    System.out.println(bookTitle);

    bookTitle = "The Kite Runner";
    System.out.println(bookTitle);
  }
}
```

```[output]
Persepolis
The Kite Runner
```

:::

## Using `final`

To define a **constant** in Java, we use the `final` keyword.

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    final String libraryName = "Central Library";
    System.out.println(libraryName);
  }
}
```

```[ouput]
Central Library
```

:::

However, because we used `final`, we cannot change its value.

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    final String libraryName = "Central Library";
    System.out.println(libraryName);

    libraryName = "Quantum Codex"; // This will cause an error
  }
}
```

```[output]
./Main.java:6: error: cannot assign a value to final variable libraryName
    libraryName = "Quantum Codex";
    ^
1 error
error: compilation failed
```

:::

::: warning

You can't use `final` with `var`!

```java
public class Main {
  public static void main(String[] args) {
    final var libraryName = "Central Library";
  }
}
```

This will throw an error.

:::

## Referencing between variables

A variable which points to another variable's value does not update its value
when the original variable changes.

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    String user1 = "BookishBen99";
    String user2 = user1;

    System.out.println("User 1: " + user1);
    System.out.println("User 2: " + user2);

    user1 = "pageturner_mia";

    // Notice that user2 does not change
    System.out.println("User 1: " + user1);
    System.out.println("User 2: " + user2);
  }
}
```

```[ouput]
User 1: BookishBen99
User 2: BookishBen99

User 1: pageturner_mia
User 2: BookishBen99
```

:::
