# Classes

<Vimeo id="1006678385" />

## Creating a class

We create a class by using the `class` keyword, defining the properties, and
providing a constructor method.

```java
public class Author {
  String name;
  int birthYear;

  public Author(String name, int birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  }
}
```

::: info

You can think of `this` as representing the object currently under construction.
You don't need to `return this` in the constructor as that will happen by
default.

:::

## Using a class

We make new instances of a class by passing in values. These will be used by the
constructor.

```java
Author maggie = new Author("Margaret Atwood", 1936);
```

## Composing classes

Objects can be nested inside objects. For example, `Book` objects can contain an
`Author` object as a property.

We update the `Book` class.

```java
public class Book {
  public String title;
  public int year;
  public boolean isAvailable;
  public Author author;

  public Book(String title, int year, boolean isAvailable, Author author) {
    this.title = title;
    this.year = year;
    this.isAvailable = isAvailable;
    this.author = author;
  }
}
```

Now, we can pass an instance of `Author` to its constructor.

```java
Author maggie = new Author("Margaret Atwood", 1936);
Book book = new Book("The Handmaid's Tale", 1985, true, maggie);

System.out.printl(book.author.name) // Margaret Atwood
```
