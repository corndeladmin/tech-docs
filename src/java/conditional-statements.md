# Conditional Statements

<Vimeo id="1005489756" />

## The `if` statement

The `if` statement runs code based on a condition.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        boolean isMembershipActive = true;

        if (isMembershipActive) {
            System.out.println("Member can borrow books.");
        }
    }
}
```

```console [output]
Member can borrow books.
```

:::

## The `else` statement

The `else` statement executes a block of code when the condition in the `if`
statement is `false`.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        boolean isMembershipActive = false;

        if (isMembershipActive) {
            System.out.println("Member can borrow books.");
        } else {
            System.out.println("Membership is inactive. Please renew.");
        }
    }
}
```

```console [output]
Membership is inactive. Please renew.
```

:::

## The `else if` statement

The `else if` statement allows us to perform additional checks.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        int userAge = 25;

        if (userAge < 18) {
            System.out.println("User is a minor.");
        } else if (userAge >= 18 && userAge <= 65) {
            System.out.println("User is an adult.");
        } else {
            System.out.println("User is a senior.");
        }
    }
}
```

```console [output]
User is an adult.
```

:::

## The ternary operator

The ternary operator provides a shorthand way of writing conditional
expressions. It has three operands, separated by a question mark `?` and a colon
`:`.

```java
condition ? (runs if condition true) : (runs if condition false);
```

We could use this to concisely check book availability:

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        int availableBooks = 3;

        String message = availableBooks > 0 ? "Books are available." : "Books are out of stock.";

        System.out.println(message);
    }
}
```

```console [output]
Books are available.
```

:::
