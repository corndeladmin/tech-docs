# Variables

## What are variables?

If you've ever used a spreadsheet before, you have used variables. In a
spreadsheet, you put a variable into a cell and refer to it by its coordinates,
e.g. `B17` might contain the number `172` and `D3` might contain the string
`"Persepolis"`.

In javascript, the idea is similar, but instead of coordinates, we use names to
refer to values, and instead of typing the value in a box, we use the assignment
operator `=` to assign a name to a value.

Let's see how this works.

## Declaring variables

In javascript, we primarily use two keywords to declare a variable: `let` and
`const`.

## Using `let`

`let` allows you to declare variables that can be changed later.

::: code-group

```js
let bookTitle = 'Persepolis'
console.log(bookTitle)
```

```console [output]
Persepolis
```

:::

Because the program executes one line at a time, from top to bottom, if we
reverse the order of the lines, we get an error:

::: code-group

```js
console.log(bookTitle)
let bookTitle = 'Persepolis'
```

```console [output]
ReferenceError: Cannot access 'bookTitle' before initialization
```

:::

We can, however, redefine the variable.

::: code-group

```js
let bookTitle = 'Persepolis'
console.log(bookTitle)

bookTitle = 'The Kite Runner'
console.log(bookTitle)
```

```console [output]
Persepolis
The Kite Runner
```

:::

Notice that we only use `let` when first declaring the variable. When redefining
it, we don't write `let` again.

## Using `const`

We can define a variable with `const` just as with `let`.

::: code-group

```js
const libraryName = 'Central Library'
console.log(libraryName)
```

```console [output]
Central Library
```

:::

However, because we used `const` (which is short for "constant"), we cannot
change its value.

::: code-group

```js
const libraryName = 'Central Library'
console.log(libraryName)

libraryName = 'Quantum Codex' // throws an error
```

```console [output]
TypeError: Assignment to constant variable.
```

:::

## Referencing between variables

One important difference between javascript and spreadsheets, is that when you
update a value in one place, other reference to the value don't necessarily
change. This is best explained with an example.

::: code-group

```js
let user1 = 'BookishBen99'
let user2 = user1

console.log('User 1:', user1)
console.log('User 2:', user2)

user1 = 'pageturner_mia'

// notice that user2 does not change
console.log('User 1:', user1)
console.log('User 2:', user2)
```

```console [output]
User 1: BookishBen99
User 2: BookishBen99

User 1: pageturner_mia
User 2: BookishBen99
```

:::
