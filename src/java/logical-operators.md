# Logical Operators in Java

<Vimeo id="1005489863" />

## Overview

The operators available in Java are shown in the table below.

| Name |             Usage             | Evaluates to                                                             |
| :--: | :---------------------------: | ------------------------------------------------------------------------ |
| AND  |           `a && b`            | `true` if `a` and `b` are both `true`, otherwise `false`                 |
|  OR  | <code>a &#124;&#124; b</code> | `true` if `a` is `true` or `b` is `true` (or both), otherwise `false`    |
| NOT  |             `!a`              | the opposite of `a` (`false` if `a` is `true`; `true` if `a` is `false`) |

## Using the operators

Here are some examples of using the operators in Java:

::: code-group

```java
public class Main {
  public static void main(String[] args) {
        boolean isBookAvailable = false;
        boolean hasOverdueBooks = true;

        System.out.println(!isBookAvailable); // NOT
        System.out.println(isBookAvailable && hasOverdueBooks); // AND
        System.out.println(isBookAvailable || hasOverdueBooks); // OR
    }
}
```

```console [output]
true
false
true
```

:::
