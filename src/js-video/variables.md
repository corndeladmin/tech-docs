# Variables

<Vimeo id="911842928" />

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

The order of the lines matters.

::: code-group

```js
console.log(bookTitle)
let bookTitle = 'Persepolis'
```

```console [output]
ReferenceError: Cannot access 'bookTitle' before initialization
```

:::

## Redefining variables

With `let`, we can redefine the variable.

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

A variable which points at another variable does not update its value.

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
