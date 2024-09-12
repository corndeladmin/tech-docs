# Nested loops

We are sometimes required to perform a loop within another loop.

## Solving array problems

We can use `for of` to perform a loop within another loop. This function counts
each occurence of a letter in our array of comments.

::: code-group

```java
import java.util.List;

public class Main {
    public static void main(String[] args) {
        List<String> comments = List.of(
            "Zoja: I can't wait for the book signing!",
            "Svetlana: Let's talk about your car's extended warranty.",
            "Rufus: Drinks tonight?",
            "Malak: I just bought tickets!"
        );

        System.out.println(search(comments, 'r'));
    }

    public static int search(List<String> comments, char letter) {
        int count = 0;

        for (String message : comments) {
            // inner loop start:
            for (char character : message.toCharArray()) {
                if (Character.toLowerCase(character) == letter) {
                    count++;
                }
            }
            // inner loop end.
        }

        return count;
    }
}
```

```console [output]
7
```

:::

## Further example

As another example, let's use a for of loop to make some
[Dewey Decimal](https://en.wikipedia.org/wiki/Dewey_Decimal_Classification)
codes.

::: code-group

```java
public class Main {
    public static void main(String[] args) {
        for (int i = 1; i < 10; i++) {
            System.out.println("Next genre:");
            int genre = 100 * i;

            // inner loop start:
            for (int j = 1; j <= i; j++) {
                int subgenre = j;
                String dewey = String.format("%d.%d", genre, subgenre)
                System.out.println(dewey);
            }
            // inner loop stop.
        }
    }
}
```

```console [output]
Next genre:
100.1
Next genre:
200.1
200.2
Next genre:
300.1
300.2
300.3
Next genre:
400.1
400.2
400.3
400.4
Next genre:
500.1
500.2
500.3
500.4
500.5
Next genre:
600.1
600.2
600.3
600.4
600.5
600.6
Next genre:
700.1
700.2
700.3
700.4
700.5
700.6
700.7
Next genre:
800.1
800.2
800.3
800.4
800.5
800.6
800.7
800.8
Next genre:
900.1
900.2
900.3
900.4
900.5
900.6
900.7
900.8
900.9
```

:::
