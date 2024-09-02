# Lambda Functions

## Defining a lambda expression

In Java, a lambda expression is a more concise way of writing an anonymous
function:

::: code-group

```java
import java.util.function.BiFunction;

public class Main {
    public static void main(String[] args) {
        // Define a lambda expression to add two numbers
        BiFunction<Integer, Integer, Integer> addNumbers = (x, y) -> {
            int result = x + y;
            return result;
        };

        System.out.println(addNumbers.apply(2, 3));
    }
}
```

```txt [output]
5
```

:::

## Implicit return

If the lambda expression consists of a single expression, Java allows you to
omit the curly braces `{}` and the `return` keyword. The expression's value is
automatically returned.

::: code-group

```java
import java.util.function.BiFunction;

public class Main {
    public static void main(String[] args) {
        // Define a lambda expression with an implicit return
        BiFunction<Integer, Integer, Integer> multiplyNumbers = (x, y) -> x * y;

        System.out.println(multiplyNumbers.apply(7, 3));
    }
}
```

```txt [output]
21
```

:::

::: info

There are some differences between lambda expressions and traditional methods in
Java, particularly around scope and functional interfaces. We won’t need to dive
into these differences for now, so we’ll keep things simple here.

:::
