---
cases:
  - 'console.log(typeof a)'
  - 'console.log(typeof b)'
  - 'console.log(typeof c)'

expected:
  - 'string'
  - 'number'
  - 'boolean'
---

# Data types

<Vimeo id="911842881" />

## Types in javascript

JavaScript has several primitive data types, which are the basic types of data
that can be directly operated on. They include:

| Name      | Description                                                                 | Example              |
| --------- | --------------------------------------------------------------------------- | -------------------- |
| String    | Represents textual data                                                     | `"The Great Gatsby"` |
| Number    | Represents both integer and floating-point numbers                          | `2023`, `19.99`      |
| Boolean   | Represents a logical entity having two values                               | `true`, `false`      |
| Undefined | Represents a variable that has not been assigned a value                    | `undefined`          |
| Null      | Represents the intentional absence of any object value                      | `null`               |
| BigInt    | Represents integers with arbitrary precision, useful for very large numbers | `9007199254740992n`  |

## Checking the type

We can check the type of a variable using the `typeof` keyword.

::: code-group

```js
const pageCount = 210
const ISBN = '978-3-16-148410-0'
const premiumMember = true

console.log(typeof pageCount)
console.log(typeof ISBN)
console.log(typeof premiumMember)
```

```console [output]
number
string
boolean
```

:::

## Adding strings

If we have two `string` types, when we add them, they get concatenated (glued
together).

::: code-group

```js
let author = 'Toni Morrison'
let title = 'Beloved'

console.log(title + ' was written by ' + author)
```

```console [output]
Beloved was written by Toni Morrison
```

:::

## Changing type

In some cases, it is possible to change from one type to another.

```js
let bookCount = String(100) // Converts number to string
let price = Number('19.99') // Converts string to number
```

## Type coercion

We need to be careful when operating on values of different types.

::: code-group

```js
const price1 = '10'
const price2 = 5
const totalPrice = price1 + price2

console.log(totalPrice) // oops!
```

```console [output]
105
```

:::

## Try it

Create three variables named `a`, `b` and `c`. Assign to them any string, number
and boolean (in that order). Don't log anything to the console.

<Exercise>

```js
// code here
```

</Exercise>
