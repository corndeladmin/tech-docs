# Map and filter with streams

<Vimeo id="1006303451" />

## Mapping with a lambda function

A map can convert a list into a new list by applying some function to each
element.

```java
import java.util.ArrayList;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        ArrayList<Double> bookPrices = new ArrayList<>();
        bookPrices.add(15.0);
        bookPrices.add(10.0);
        bookPrices.add(7.5);

        // Map each price to 80% of its original value
        ArrayList<Double> discountedPrices = bookPrices.stream()
            .map(price -> 0.8 * price)
            .collect(Collectors.toCollection(ArrayList::new));

        System.out.println(discountedPrices);
        // [12.0, 8.0, 6.0]
    }
}
```

## Filtering with a lambda function

We can filter with a lambda function that returns a boolean - if `true` the
element will be kept in the stream; if `false` it will be discarded.

```java
import java.util.ArrayList;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        ArrayList<Double> bookPrices = new ArrayList<>();
        bookPrices.add(15.0);
        bookPrices.add(10.0);
        bookPrices.add(7.5);

        // Filter out cheap items
        ArrayList<Double> discountedPrices = bookPrices.stream()
            .filter(price -> price >= 10)
            .collect(Collectors.toCollection(ArrayList::new));

        System.out.println(discountedPrices);
        // [15.0, 10.0]
    }
}
```

## Combining map and filter

We can chain multiple maps and filters together.

```java
import java.util.ArrayList;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        ArrayList<Double> bookPrices = new ArrayList<>();
        bookPrices.add(15.0);
        bookPrices.add(10.0);
        bookPrices.add(7.5);

        // Filter out cheap items
        ArrayList<Double> discountedPrices = bookPrices.stream()
            .filter(price -> price >= 10)
            .map(price -> 0.8 * price)
            .collect(Collectors.toCollection(ArrayList::new));

        System.out.println(discountedPrices);
        // [12.0, 8.0]
    }
}
```

## Map and filter with arrays

Filtering and mapping an `array` is a bit easier than a `List` as we don't need
a collector, just the `.toArray()` method.

```java
import java.util.Arrays;

public class Main {
    public static void main(String[] args) {
        // Using an array instead of an ArrayList
        double[] bookPrices = {15.0, 10.0, 7.5};

        // Filter out cheap items and apply discount
        double[] discountedPrices = Arrays.stream(bookPrices)
            .filter(price -> price >= 10)
            .map(price -> 0.8 * price)
            .toArray();

        // Print the resulting array
        System.out.println(Arrays.toString(discountedPrices));
        // Output: [12.0, 8.0]
    }
}
```

## Mapping with a method

If the mapping or filtering logic is more complex, we can extract it into a
separate method instead of using a lambda function.

```java
import java.util.ArrayList;
import java.util.stream.Collectors;

public class Main {
    public static void main(String[] args) {
        ArrayList<Integer> pageNumbers = new ArrayList<>();
        pageNumbers.add(300);
        pageNumbers.add(150);
        pageNumbers.add(120);
        pageNumbers.add(500);
        pageNumbers.add(250);

        // Convert each page number to reading time
        ArrayList<String> readingTimes = pageNumbers.stream()
            .map(Main::readingTime)
            .collect(Collectors.toCollection(ArrayList::new));

        System.out.println(readingTimes);
        // [7.5 hours, 3.75 hours, 3.0 hours, 12.5 hours, 6.25 hours]
    }

    // Method to calculate reading time
    public static String readingTime(int pages) {
        double time = (1.5 * pages) / 60;
        return time + " hours";
    }
}
```
