# Variables

<Vimeo id="123" />

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

For the rest of this guide, we will assume the code is being placed inside the
boilerplate above, and we won't write it out in every example.

:::

## Using `var`

In Java, we can use `var` to create new **variables**.

```java
var bookTitle = "Persepolis";
System.out.println(bookTitle);
```

```
Persepolis
```

The order of the lines matters.

```java
System.out.println(bookTitle);
var bookTitle = "Persepolis";
```

```
<!-- TODO -->
```

## Specifying type

Rather than using `var`, it is generally better to give the **type** of the
variable.

```java
String bookTitle = "Persepolis";
System.out.println(bookTitle);
```

```
Persepolis
```

This makes it clear to everyone reading the code that `bookTitle` contains a
string.

::: info

A **string** in programming is a sequence of text characters. There are other
types, too, such as **integers** and **booleans**. We will learn all about them
soon!

:::

## Redefining variables

Variables declared with `var` or their type can be reassigned new values.

```java
var bookTitle = "Persepolis";
System.out.println(bookTitle);

bookTitle = "The Kite Runner";
System.out.println(bookTitle);
```

```
Persepolis
The Kite Runner
```

Variables define with their type can only be reassigned to variables of the same
type:

```java
var bookTitle = "Persepolis";
System.out.println(bookTitle);

bookTitle = "The Kite Runner"; // ok
System.out.println(bookTitle);

bookTitle = 10 // error!
```

```
<!-- TODO -->
```

## Using `final`

To define a **constant** in Java, we use the `final` keyword.

```java
final String libraryName = "Central Library";
System.out.println(libraryName);
```

```
Central Library
```

However, because we used `final`, we cannot change its value.

```java
final String libraryName = "Central Library";
System.out.println(libraryName);

libraryName = "Quantum Codex"; // This will cause an error
```

```
<!-- TODO -->
```

::: warning

You can't use `final` with `var`!

```java
final var libraryName = "Central Library"
```

This will throw an error.

:::

## Referencing between variables

A variable which points to another variable's value does not update its value
when the original variable changes.

```java
String user1 = "BookishBen99";
String user2 = user1;

System.out.println("User 1: " + user1);
System.out.println("User 2: " + user2);

user1 = "pageturner_mia";

// Notice that user2 does not change
System.out.println("User 1: " + user1);
System.out.println("User 2: " + user2);
```

```
User 1: BookishBen99
User 2: BookishBen99

User 1: pageturner_mia
User 2: BookishBen99
```
