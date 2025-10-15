# For-Each Loops

<Vimeo id="1006545686" />

## Average Rating

Let's see how we'd use a `for-each` loop to refactor the average rating
function.

::: code-group

```java
public class AverageCalculator {

    public static double average(double[] arr) {
        double total = 0;

        for (double x : arr) {
            total += x;
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

::: tip

We chose the name `x` here to refer to the current array element, but any
variable name is fine.

:::
