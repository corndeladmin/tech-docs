# Logical operators

Logical operators are the backbone of decision-making in programming.

This guide will explore the AND (&&), OR (||), and NOT (!) operators.

## Overview

The operators avialable in Javascript are shown in the table below.

| Name |             Usage             | Evaluates to                                                             |
| :--: | :---------------------------: | ------------------------------------------------------------------------ |
| AND  |           `a && b`            | `true` if `a` and `b` are both `true`, otherwise `false`                 |
|  OR  | <code>a &#124;&#124; b</code> | `true` if `a` is `true` or `b` is `true` (or both), otherwise `false`    |
| NOT  |             `!a`              | the opposite of `a` (`false` if `a` is `true`; `true` if `a` is `false`) |

## Using the operators

Here are a few examples showing how these operators might be used in computer
programs:

::: code-group

```js
const isBookAvailable = false
const hasOverdueBooks = true

console.log(!isBookAvailable) // NOT
console.log(isBookAvailable && hasOverdueBooks) // AND
console.log(isBookAvailable || hasOverdueBooks) // OR
```

```console [output]
true
false
true
```

:::
