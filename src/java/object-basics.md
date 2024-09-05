# Objects

<Vimeo id="1006678448" />

## Key value pairs

We use a class to create an object. Objects allow us to store values against
keys in a structured way.

```java
public class Main {
  public static void main(String[] args) {
    Book book = new Book("The Handmaid's Tale", 1985, true);
  }
}
```

## Accessing public properties

We can access public properties stored in the object using a `.` dot.

```java
public class Main {
  public static void main(String[] args) {
    Book book = new Book("The Handmaid's Tale", 1985, true);

    System.out.println(book.title); // The Handmaid's Tale
    System.out.println(book.year); // 1985
    System.out.println(book.isAvailable); // true
  }
}
```

## Updating public properties

We can update public properties by directly assigning to them.

```java
public class Main {
  public static void main(String[] args) {
    Book book = new Book("The Handmaid's Tale", 1985, true);

    System.out.println(book.isAvailable); // true
    book.isAvailable = false;
    System.out.println(book.isAvailable); // false
  }
}
```

## Adding new properties

We cannot directly add new properties to a created object.

```java
public class Main {
  public static void main(String[] args) {
    Book book = new Book("The Handmaid's Tale", 1985, true);

    book.author = "Margaret Atwood" // error
  }
}
```
