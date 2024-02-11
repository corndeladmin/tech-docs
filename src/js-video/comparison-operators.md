# Comparison operators

<Vimeo id="911842849" />

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

::: tip

As a general rule, prefer `===` unless you know you need `==`.

:::

## Examples

### Using inequalities

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

### Using equality operators

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

As we mentioned, `==` and `===` have different behaviour.

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
