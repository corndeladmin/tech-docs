# While Loops

<Vimeo id="1006545748" />

## Logging Numbers

`while` loops will repeat a block of code as long as the condition is true.

::: code-group

```java
int i = 1;

while (i < 6) {
    System.out.println(i);
    i++; // increase i by 1 at the end of each loop
}

System.out.println("Done!");
```

```output
1
2
3
4
5
Done!
```

:::

::: tip

The `i++` is equivalent to `i = i + 1` in Java. It is very important as it
guarantees the condition `i < 6` eventually fails, avoiding an infinite loop.

:::

## Accumulating a Value

Suppose we want to add all the odd numbers less than `100`.

::: code-group

```java
int n = 1;
int total = 0; // we'll collect our answer here

while (n < 100) {
    total += n;
    n += 2; // so n stays odd
}

System.out.println(total);
```

```output
2500
```

:::

## Looping Through an Array

If we want to loop through an array, we can use a variable `i` (or any other
letter) to keep track of the index.

Perhaps we need to find the average rating of a list of books:

::: code-group

```java
public class AverageCalculator {

    public static double average(double[] arr) {
        int i = 0;
        double total = 0;

        while (i < arr.length) {
            total += arr[i];
            i++;
        }

        return total / arr.length;
    }

    public static void main(String[] args) {
        double[] ratings = {4.25, 3.34, 2.6, 2.74, 2.36, 2.32, 3.94, 2.73};
        System.out.println(average(ratings));
    }
}
```

```output
3.035
```

:::
