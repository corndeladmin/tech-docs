# Comparison operators

Comparison operators allow us to compare two values in JavaScript, resulting in
a Boolean value (`true` or `false`). These operators are pivotal in making
decisions, such as determining if a user meets the age requirement for an
account, comparing book prices, or checking if the inventory meets a certain
threshold.

## Operators explained

Here are the most common comparison operators in javascript:

|   Usage   | Description                                         |
| :-------: | --------------------------------------------------- |
|  `a > b`  | Is `a` bigger than `b`?                             |
| `a >= b`  | Is `a` bigger than or equal to `b`?                 |
|  `a < b`  | Is `a` smaller than `b`?                            |
| `a <= b`  | Is `a` smaller than or equal to `b`?                |
| `a === b` | Is `a` strictly equal to `b`? (same value and type) |
| `a == b`  | Is `a` loosely equal to `b` ?                       |

Here, _loosely equal to_ means that they would be equal after type coercion.

::: info

There are lots of quirky behaviours which arise when you use `==` instead of
`===`. For example, the string `"10"` and number `10` are considered the same by
`==` but different by `===`.

As a general rule, prefer `===` unless you know you need `==`.

:::

## Examples

Suppose we want to check if a user is old enough to check out a particular book.

::: code-group

```js
const minimumAge = 18
let userAge = 21
console.log(userAge >= minimumAge)
```

```console [output]
true
```

:::

Perhaps we need to check the condition of some books.

::: code-group

```js
const bookCondition = 'good'

console.log(bookCondition === 'poor')
console.log(bookCondition === 'good')
```

```console [output]
false
true
```

:::

## Strict and loose equality

As we mentioned above, `==` and `===` have different behaviour.

::: code-group

```js
let userId = '123'
let inputId = 123

// loose equality check
console.log(userId == inputId)

// strict equality check
console.log(userId === inputID)
```

```console [output]
true
false
```

:::
