---
expected:
  - 'false'
---

# Logical operators

<Vimeo id="911842869" />

## Overview

The operators available in Javascript are shown in the table below.

| Name |             Usage             | Evaluates to                                                             |
| :--: | :---------------------------: | ------------------------------------------------------------------------ |
| AND  |           `a && b`            | `true` if `a` and `b` are both `true`, otherwise `false`                 |
|  OR  | <code>a &#124;&#124; b</code> | `true` if `a` is `true` or `b` is `true` (or both), otherwise `false`    |
| NOT  |             `!a`              | the opposite of `a` (`false` if `a` is `true`; `true` if `a` is `false`) |

## Using the operators

Here are some examples of using the operators:

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

## Try it

In the `.log()` below, write the javascript equivalent of

> Not (`x` and (`y` or `z`))

<Exercise>

```js
const x = true
const y = false
const z = true

console.log() // <-- put your calculation here
```

</Exercise>
