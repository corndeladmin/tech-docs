# Operators and expressions

<Vimeo id="1005489958" />

## Arithmetic operators

Java provides several arithmetic operators that let you perform mathematical
calculations.

| Symbol | Name           | Description                             |
| :----: | :------------- | :-------------------------------------- |
|  `+`   | Addition       | Adds two values                         |
|  `-`   | Subtraction    | Finds the difference between two values |
|  `*`   | Multiplication | Multiplies two values                   |
|  `/`   | Division       | Divides one value by another            |
|  `%`   | Remainder      | Calculates the remainder on division    |

## Expressions

An expression in Java is a collection of operators and variables that evaluates
to a single value.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        int bookPrice = 15; // variable
        int numberOfBooks = 100; // variable
        int totalValue = bookPrice * numberOfBooks; // expression

        System.out.println(totalValue);
    }
}
```

```[output]
1500
```

:::

::: info

`int` in Java is an integer, whereas `double` is used for decimal numbers.

:::

## Exponentiation

There is no exponentiation operator in Java. Instead, you use `Math.pow`.

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    double result = Math.pow(2, 3);
    System.out.println(result);
  }
}
```

```[output]
8.0
```

:::

## Modifying a Variable

When updating a variable, we can use its old value to calculate its new value.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        int availableBooks = 120;
        availableBooks = availableBooks + 10;

        System.out.println(availableBooks);
    }
}
```

```[output]
130
```

:::

We can do this a bit more quickly with `+=` and `-=`.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        int availableBooks = 120;

        availableBooks += 10;
        System.out.println(availableBooks);

        availableBooks -= 5;
        System.out.println(availableBooks);
    }
}
```

```[output]
130
125
```

:::
