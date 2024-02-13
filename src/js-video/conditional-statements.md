# Conditional statements

<Vimeo id="911842826" />

## The `if` statement

The `if` statements runs code based on a condition.

::: code-group

```js
let isMembershipActive = true

if (isMembershipActive) {
  console.log('Member can borrow books.')
}
```

```console [output]
Member can borrow books.
```

:::

## The `else` statement

The `else` statement executes a block of code when the condition in the `if`
statement is `false`.

::: code-group

```js
let isMembershipActive = true

if (isMembershipActive) {
  console.log('Member can borrow books.')
} else {
  console.log('Membership is inactive. Please renew.')
}
```

```console [output]
Membership is inactive. Please renew.
```

:::

## The `else if` statement

The `else if` statement allows us to perform additional checks.

::: code-group

```js
let userAge = 25

if (userAge < 18) {
  console.log('User is a minor.')
} else if (userAge >= 18 && userAge <= 65) {
  console.log('User is an adult.')
} else {
  console.log('User is a senior.')
}
```

```console [output]
User is an adult.
```

:::

## The ternary operator

The ternary operator provides a shorthand way of writing conditional
expressions. It has three operands, separated by a question mark `?` and a colon
`:`.

```js
condition ? (runs if condition true) : (runs if condition false)
```

We could use this to concisely check book availability:

::: code-group

```js
let availableBooks = 3

let message =
  availableBooks > 0 ? 'Books are available.' : 'Books are out of stock.'

console.log(message)
```

```console [output]
Books are available.
```

:::
