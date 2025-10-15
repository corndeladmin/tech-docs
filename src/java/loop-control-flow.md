# Loop Control Flow

<Vimeo id="1006545650" />

## Continue

We can use the `continue` keyword to skip any messages that contain the word
`warranty`.

::: code-group

```java
public class LoopControlFlow {

    public static void main(String[] args) {
        String[] comments = {
            "Zoja: I can't wait for the book signing!",
            "Svetlana: Let's talk about your car's extended warranty.",
            "Rufus: Drinks tonight?",
            "Malak: I just bought tickets!"
        };

        for (String message : comments) {
            // .contains() checks if a string contains another string
            if (message.contains("warranty")) {
                continue;
            }

            System.out.println(message);
        }
    }
}
```

```output
Zoja: I can't wait for the book signing!
Rufus: Drinks tonight?
Malak: I just bought tickets!
```

:::

## Break

The `break` keyword exits the loop immediately. This is useful when we want to
stop iterating through the comments once we've found the one we're looking for.

::: code-group

```java
public class LoopControlFlow {

    public static void main(String[] args) {
        String[] comments = {
            "Zoja: I can't wait for the book signing!",
            "Svetlana: Let's talk about your car's extended warranty.",
            "Rufus: Drinks tonight?",
            "Malak: I just bought tickets!"
        };

        for (String message : comments) {
            if (message.startsWith("Rufus")) {
                System.out.println(message);
                break;
            }
        }
    }
}
```

```output
Rufus: Drinks tonight?
```

:::
