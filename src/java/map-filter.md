# Map and filter with streams

<Vimdeo id="" />

## Mapping with a lambda function

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

## Mapping with a method

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

## Filtering

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

        // Filter the page numbers to get only those less than 200
        ArrayList<Integer> shortBooks = pageNumbers.stream()
            .filter(num -> num < 200)
            .collect(Collectors.toCollection(ArrayList::new));

        System.out.println(shortBooks);  // [150, 120]
    }
}
```

## Combining map and filter

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

        // Filter and map the list
        ArrayList<String> quickReads = pageNumbers.stream()
            .filter(num -> num < 200)
            .map(num -> (num * 1.5) / 60 + " hours")
            .collect(Collectors.toCollection(ArrayList::new));

        System.out.println(quickReads);
        // [3.75 hours, 3.0 hours]
    }
}
```
