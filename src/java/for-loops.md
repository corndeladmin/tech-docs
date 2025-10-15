# For Loops

<Vimeo id="1006545710" />

## Syntax

`for` loops provide a convenient syntax for iterating through a range of values.

Let's see the same examples we saw for `while` loops using the `for` loop
format.

::: code-group

```java
for (int i = 1; i < 6; i++) {
    System.out.println(i);
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

## Accumulating a Value

Let's add all the odd numbers less than `100`.

::: code-group

```java
int total = 0;

for (int n = 1; n < 100; n += 2) {
    total += n;
}

System.out.println(total);
```

```output
2500
```

:::

## Looping Through an Array

We can still use a variable like `i` as an index to loop through an array.

::: code-group

```java
public class AverageCalculator {

    public static double average(double[] arr) {
        double total = 0;

        for (int i = 0; i < arr.length; i++) {
            total += arr[i];
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
