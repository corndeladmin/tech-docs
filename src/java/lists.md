# Lists

<Vimeo id="123" />

## Creating a list

A `List` is more versatile than an array because we can add and remove items.
Its size can change. There are several types of `List` but the most common is
the `ArrayList`.

::: code-group

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> authors = new ArrayList<>();

    authors.add("Chinua Achebe");
    authors.add("Toni Morrison");
    authors.add("Gabriel García Márquez");
    authors.add("Arundhati Roy");
    authors.add("Marjane Satrapi");

    System.out.println(authors);
  }
}
```

```console [output]
[Chinua Achebe, Toni Morrison, Gabriel García Márquez, Arundhati Roy, Marjane Satrapi]
```

:::

## ArrayList methods

There are lots of methods which allow us to work with Lists.

| Method                | Description                                                                |
| --------------------- | -------------------------------------------------------------------------- |
| `add(e)`              | Appends the specified element to the end of the list.                      |
| `add(index, element)` | Inserts the element at the specified position in the list.                 |
| `remove(index)`       | Removes the element at the specified position.                             |
| `remove(o)`           | Removes the first occurrence of the specified element from the list.       |
| `get(index)`          | Returns the element at the specified position.                             |
| `set(index, element)` | Replaces the element at the specified position with the specified element. |
| `size()`              | Returns the number of elements in the list.                                |
| `contains(o)`         | Returns `true` if the list contains the specified element.                 |

There are more which your editor can highlight for you.

### `add(index, element)`

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> authors = new ArrayList<>();
    authors.add("Chinua Achebe");
    authors.add("Toni Morrison");
    authors.add("Gabriel García Márquez");

    authors.add(1, "Amy Tan");
    System.out.println(authors);
    // [Chinua Achebe, Amy Tan, Toni Morrison, Gabriel García Márquez]
  }
}
```

### `remove(index)` and `remove(element)`

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> authors = new ArrayList<>();
    authors.add("Chinua Achebe");
    authors.add("Toni Morrison");
    authors.add("Gabriel García Márquez");

    authors.remove(1);
    System.out.println(authors);
    // [Chinua Achebe, Gabriel García Márquez]

    authors.remove("Chinua Achebe");
    System.out.println(authors);
    // [Gabriel García Márquez]
  }
}
```

### `get(index)` and `set(index, element)`

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> authors = new ArrayList<>();
    authors.add("Chinua Achebe");
    authors.add("Toni Morrison");
    authors.add("Gabriel García Márquez");

    var author = authors.get(1);
    System.out.println(author); // "Toni Morrison"

    authors.set(2, "Sandra Cisneros");
    System.out.println(authors);
    // [Chinua Achebe, Toni Morrison, Sandra Cisneros]

  }
}
```

## Methods on lists

We can create our own methods which accept lists and work with them.

::: info

To allow the method to work with lists of any type, we need to declare a generic
type parameter. In the below example we use `T` to represent the type of data
stored in the list.

:::

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<String> authors = new ArrayList<>();
    authors.add("Chinua Achebe");
    authors.add("Toni Morrison");
    authors.add("Gabriel García Márquez");

    ArrayList<String> rotated = rotateArray(authors);
    System.out.println(rotated);
  }

  public static <T> ArrayList<T> rotateArray(ArrayList<T> list) {
    var lastEl = list.removeFirst();
    list.add(lastEl);
    return list;
  }
}
```
