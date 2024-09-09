# Comparison Operators

<Vimeo id="1005489819" />

## Operators explained

Here are the most common comparison operators in Java:

|  Usage   | Description                          |
| :------: | ------------------------------------ |
| `a > b`  | Is `a` greater than `b`?             |
| `a >= b` | Is `a` greater than or equal to `b`? |
| `a < b`  | Is `a` less than `b`?                |
| `a <= b` | Is `a` less than or equal to `b`?    |
| `a == b` | Is `a` equal to `b`?                 |
| `a != b` | Is `a` not equal to `b`?             |

::: tip

In Java, `==` checks for equality of primitive types and object references. For
object content equality, use `.equals()`.

:::

## Examples

### Using inequalities

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        int minimumAge = 18;
        int userAge = 21;
        System.out.println(userAge >= minimumAge);
    }
}
```

```console [output]
true
```

:::

### Using equality operators

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        String bookCondition = "good";

        System.out.println(bookCondition == "poor");
        System.out.println(bookCondition == "good");
    }
}
```

```console [output]
false
true
```

:::

## Strict and loose equality

In Java, equality is strict, in the sense that `==` will only be true if the
data has the same value and the same type.

```java
public class Main {
    public static void main(String[] args) {
        String userId = "123";
        int inputId = 123;

        System.out.println(userId == inputId); // error!
        System.out.println(userId == Integer.toString(inputId)); // true
    }
}
```
