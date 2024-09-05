# Lists of objects

<Vimeo id="1006683384" />

## Creating a list of objects

We can add objects to a list or array just like any other data.

::: code-group

```java
import java.util.ArrayList;
import java.util.List;
import models.Book;

public class Main {
  public static void main(String[] args) {
    List<Book> books = new ArrayList<>();

    // Add books to the list
    books.add(new Book("The Handmaid's Tale", 1985, false));
    books.add(new Book("Oryx and Crake", 2003, true));
    books.add(new Book("Brave New World", 1932, false));
    books.add(new Book("The Geometry of Type", 2013, true));
    books.add(new Book("The Design of Everyday Things", 1988, true));

    for (Book book : books) {
      System.out.println(book);
    }
  }
}
```

```console [output]
The Handmaid's Tale
Oryx and Crake
Brave New World
The Geometry of Type
The Design of Everyday Things
```

:::

## Using loops

We can use our knowledge of loops to solve problems on arrays of objects. For
example, suppose we need to count how many books were published in the 20th
century.

```java
public static int countOldBooks(List<Book> books) {
  int count = 0;

  for (Book book : books) {
    if (book.year < 2000) {
      count++;
    }
  }

  return count; // 3
}
```

## Transforming with `.map`

It is common to somehow transform the list of objects. For example, we can take
the list of books and return a list of just the titles.

::: code-group

```java
public static List<String> getBookTitles(List<Book> books) {
  return books.stream().map(book -> book.title).toList();
}
```

```console [output]
[The Handmaid's Tale, Oryx and Crake, Brave New World, The Geometry of Type, The Design of Everyday Things]
```

:::

## Filtering with `.filter`

We can also filter the list of books based on any criteria we like. For example,
we can get a list of only the available books.

```java
public static List<Book> getAvailableBooks(List<Book> books) {
  return books.stream().filter(book -> book.isAvailable).toList();
}
```
