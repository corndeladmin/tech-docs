# List techniques

<Vimeo id="1006303506" />

## Sort and search

To sort and search a `List` we use the `Collections` class.

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    List<Integer> pageNumbers = new ArrayList<>();
    pageNumbers.add(300);
    pageNumbers.add(150);
    pageNumbers.add(120);
    pageNumbers.add(500);
    pageNumbers.add(250);

    int index = Collections.binarySearch(pageNumbers, 500);
    System.out.println(index); // 3

    Collections.sort(pageNumbers);
    System.out.println(pageNumbers);
    // [120, 150, 250, 300, 500]
  }
}
```

## Sublists

We can take a slice out of a list with `.subList(start, stop)`.

::: warning

The value at `start` is included but the value at `stop` is not.

:::

```java
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
  public static void main(String[] args) {
    List<Integer> pageNumbers = new ArrayList<>();
    pageNumbers.add(300);
    pageNumbers.add(150);
    pageNumbers.add(120);
    pageNumbers.add(500);
    pageNumbers.add(250);

    var subList = pageNumbers.subList(1, 3);
    System.out.println(subList); // [150, 120]

    var withoutLastEl = listWithoutLastEl(pageNumbers);
    System.out.println(withoutLastEl);
    // [300, 150, 120, 500]
  }

  public static <T> List<T> listWithoutLastEl(List<T> list) {
    return list.subList(0, list.size() - 1);
  }
}
```

Note that we have extracted part of the functionality into a separate method,
just to demonstrate that this is possible.
