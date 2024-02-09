# Operators and expressions

Operators allow us to perform operations on variables and values, while
expressions are combinations of variables, values, and operators that evaluate
to a single value. Let's understand how to use these concepts to handle
operations like calculating total book collections, average ratings, and more.

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

For example

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

## New from old

When updating a variable, we can use its old value to calculate its new value.

For example, if we want to add `10` to the number of available books, we could
do this:

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

In the specific case of adding and subtracting numbers, we can do this a bit
more quickly with `+=` and `-=`.

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
