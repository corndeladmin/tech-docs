---
expected:
  - 3
---

# Operators and expressions

<Vimeo id="911842914" />

## Arithmetic operators

Javascript provides several arithmetic operators that let you perform
mathematical calculations.

| Symbol | Name           | Description                                                   |
| :----: | -------------- | ------------------------------------------------------------- |
|  `+`   | Addition       | Adds two values                                               |
|  `-`   | Subtraction    | Finds the difference between two values                       |
|  `*`   | Multiplication | Multiplies two values                                         |
|  `/`   | Division       | Divides one value by another                                  |
|  `**`  | Exponentiation | Raises one value to the power of another                      |
|  `%`   | Remainder      | Calculates the remainder on division                          |
|  `//`  | Quotient       | Divides the numbers then rounds _down_ to the nearest integer |

## Expressions

An expression in javascript is a collection of operators and variables that
evaluates down to a single value.

::: code-group

```js
const bookPrice = 15 // variable
const numberOfBooks = 100 // variable
const totalValue = bookPrice * numberOfBooks // expression

console.log(totalValue)
```

```console [output]
1500
```

:::

## Modifying a variable

When updating a variable, we can use its old value to calculate its new value.

::: code-group

```js
let availableBooks = 120
availableBooks = availableBooks + 10

console.log(availableBooks)
```

```console [output]
130
```

:::

We can do this a bit more quickly with `+=` and `-=`.

::: code-group

```js
let availableBooks = 120

availableBooks += 10
console.log(availableBooks)

availableBooks -= 5
console.log(availableBooks)
```

```console [output]
130
125
```

:::

## Try it

Calculate the remainder when `a` to the power of `b` is divided by `c`. Log your
answer to the console.

<Exercise>

```js
const a = 12
const b = 7
const c = 5

console.log() // <-- put your calculation here
```

</Exercise>
