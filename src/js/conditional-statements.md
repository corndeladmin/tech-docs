# Conditional statements

Conditional statements enable your application to execute different code blocks
based on certain conditions. This capability is vital for handling a variety of
scenarios, such as checking user eligibility, managing book loans, and more.
We'll explore the `if`, `else if`, `else`, and the ternary operator in
JavaScript.

## The `if` statement

Let's check to see if our member has an active membership. The code block inside
the curly `{}` brackets will only run if the condition in `()` parentheses is
`true`, otherwise it gets skipped.

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

The `else if` statement allows us to perform additional checks. The first
condition which returns `true` determines which code block runs. If an `else`
block is provided then that will run if all other checks are `false`.

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

The ternary operator provides a shorthand way of writing simple if-else
statements. It has three operands, separated by a question mark `?` and a colon
`:`.

Here's the general syntax:

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
