# Arrays

<Vimeo id="1006303654" />

## Creating arrays

An array is a fixed length container.

We can create an array of numbers like this:

```java
public class Main {
  public static void main(String[] args) {
    int[] ages = {21, 25, 30};
  }
}
```

We can create and print an array of strings like this:

::: code-group

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    String[] bookTitles = {
        "Things Fall Apart",
        "Beloved",
        "One Hundred Years of Solitude",
        "The God of Small Things",
        "Persepolis"
    };

    System.out.println(Arrays.toString(bookTitles));
  }
}
```

```console [output]
[Things Fall Apart, Beloved, One Hundred Years of Solitude, The God of Small Things, Persepolis]
```

:::

## Accessing items

We can access an item using its index.

```java
public class Main {
  public static void main(String[] args) {
    String[] bookTitles = {
        "Things Fall Apart",
        "Beloved",
        "One Hundred Years of Solitude",
        "The God of Small Things",
        "Persepolis"
    };

    var firstBook = bookTitles[0];
    var secondBook = bookTitles[1];

    System.out.println(firstBook); // Things Fall Apart
    System.out.println(secondBook); // Beloved
  }
}
```

::: warning

Note that we start counting indices from `0`. This is known as `0` based
indexing.

:::

## Array length

We can get the length of an array using the `.length` property. This is useful
for accessing the last element of the Array.

```java
public class Main {
  public static void main(String[] args) {
    String[] bookTitles = {
        "Things Fall Apart",
        "Beloved",
        "One Hundred Years of Solitude",
        "The God of Small Things",
        "Persepolis"
    };

    System.out.println(bookTitles.length); // 5

    var lastItem = bookTitles[bookTitles.length - 1];
    System.out.println(lastItem); // Persepolis
  }
}
```

## Modifying items

We can modify an array item by assigning to its position.

::: code-group

```java
import java.util.Arrays;

public class Main {
  public static void main(String[] args) {
    String[] bookTitles = {
        "Things Fall Apart",
        "Beloved",
        "One Hundred Years of Solitude",
        "The God of Small Things",
        "Persepolis"
    };

    bookTitles[2] = "The Kite Runner";

    System.out.println(Arrays.toString(bookTitles));

  }
}
```

```console [output]
[Things Fall Apart, Beloved, The Kite Runner, The God of Small Things, Persepolis]
```

:::
