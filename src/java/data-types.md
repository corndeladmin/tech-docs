# Data types

## Types in Java

Java has several primitive data types, which are the basic types of data that
can be directly operated on. They include:

| Name      | Description                                    | Example              |
| :-------- | :--------------------------------------------- | :------------------- |
| `String`  | Represents textual data                        | `"The Great Gatsby"` |
| `int`     | Represents integer numbers                     | `2023`, `42`         |
| `double`  | Represents floating-point numbers              | `19.99`, `3.14`      |
| `boolean` | Represents a logical entity having two values  | `true`, `false`      |
| `char`    | Represents a single 16-bit Unicode character   | `'A'`, `'z'`         |
| `long`    | Represents integer numbers with a larger range | `9007199254740992L`  |

## Assigning types

Java is a statically typed language, meaning the _type_ of a variable is checked
before the code actually runs.

```java
public class Main {
    public static void main(String[] args) {
        int pageCount = 210;
        String ISBN = "978-3-16-148410-0";
        boolean premiumMember = true;
        double price = 19.99;
    }
}
```

::: tip

It is always best to declare the type of variables explicitly, because this
prevents bugs from creeping into the code later on.

:::

## Type errors

Values can only be assigned and reassigned to variables of the correct type:

::: code-group

```java
public class Main {
  public static void main(String[] args) {
    int price = 19.99; // error!

    String bookTitle = "Persepolis";
    bookTitle = 10; // error!
  }
}
```

```[output]
./Main.java:3: error: incompatible types: possible lossy conversion from double to int
    int price = 20.0; // error!
                ^
./Main.java:6: error: incompatible types: int cannot be converted to String
    bookTitle = 10; // error!
                ^
2 errors
error: compilation failed
```

:::

## Adding strings

In Java, you can concatenate strings using the `+` operator.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        String author = "Toni Morrison";
        String title = "Beloved";

        System.out.println(title + " was written by " + author);
    }
}
```

```[output]
Beloved was written by Toni Morrison
```

:::

## Changing type

Java allows you to cast variables into different types.

The main reasons to do this are:

1. Turning variables into strings

   ```java
   public class Main {
     public static void main(String[] args) {
       String bookCount = Integer.toString(17); // int to string
       String price = Double.toString(19.99); // double to string
       String isMember = Boolean.toString(false); // boolean to string
     }
   }
   ```

2. Parsing strings into variables of other types

   ```java
   public class Main {
     public static void main(String[] args) {
       int bookCount = Integer.parseInt("17"); // string to number
       double price = Double.parseDouble("19.99"); // string to double
       boolean isMember = Boolean.parseBoolean("false"); // string to boolean
     }
   }
   ```

## Type coercion

Generally, Java won't allow you to operate between two variables of different
types, but there are some important exceptions.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        String price1 = "10";
        int price2 = 5;
        double price3 = 9.99;

        System.out.println(price1 + price2); // Output: 105
        System.out.println(price2 + price3); // Output: 14.99
    }
}
```

```[output]
105
14.99
```

:::

::: warning

Type coercion can be useful, but it is also the source of lots of bugs.

:::
