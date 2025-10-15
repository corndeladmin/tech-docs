# Array techniques

<Vimeo id="1006303605" />

## Cloning an array

When we clone an array, we make a completely independent copy of it.

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

    String[] bookTitlesClone = bookTitles.clone();

    bookTitles[2] = "The Kite Runner";

    System.out.println(bookTitles[2]); // The Kite Runner
    System.out.println(bookTitlesClone[2]); // One Hundred Years of Solitude
  }
}
```

## Sorting arrays

We can sort an array. This example uses strings but it will work with other data
types too.

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

    Arrays.sort(bookTitles);

    System.out.println(Arrays.toString(bookTitles));
  }
}
```

```console [output]
[Beloved, One Hundred Years of Solitude, Persepolis, The God of Small Things, Things Fall Apart]
```

:::

Note that ordering strings is done by unicode value, and so it is case
sensitive. We can do a case insensitive search by passing
`String.CASE_INSENSITIVE_ORDER` as a second argument to `.sort()`.

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
        "persepolis"
    };

    Arrays.sort(bookTitles);
    System.out.println(Arrays.toString(bookTitles));

    Arrays.sort(bookTitles, String.CASE_INSENSITIVE_ORDER);
    System.out.println(Arrays.toString(bookTitles));
  }
}
```

```console [output]
[Beloved, One Hundred Years of Solitude, The God of Small Things, Things Fall Apart, persepolis]
[Beloved, One Hundred Years of Solitude, persepolis, The God of Small Things, Things Fall Apart]
```

:::

## Searching arrays

We can search for the index of any given value.

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

    int index = Arrays.binarySearch(bookTitles, "The God of Small Things");
    System.out.println(index); // 3
  }
}
```
