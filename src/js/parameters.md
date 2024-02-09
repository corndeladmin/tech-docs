# Parameters

We have seen how functions help us repeat code, and how the `return` statement
allows us to get values out of the function.

But how do we put values _into_ the function?

That's what parameters are for.

## Defining parameters

A parameter is a placeholder, and its value can be chosen each time we use the
function. The standard example is just adding two numbers together:

```js
function addNumbers(x, y) {
  return x + y
}
```

## Using parameters

Now, we can pass different values in to take the place of `x` and `y`, getting a
different return value each time.

::: code-group

```js
function addNumbers(x, y) {
  return x + y
}

console.log(addNumbers(2, 3))
console.log(addNumbers(14, -20))

// even like this
const a = 134
const b = 201
console.log(addNumbers(a, b))
```

```console [output]
5
-6
335
```

:::

::: info

When we define the function, the placeholders for future values are called
`parameters`.

When we provide actual values, those values are called `arguments`.

In the example above, `x` and `y` are parameters but `2` and `5` are arguments.

:::

## Further examples

### Functions with conditional logic

Here's a useful function which determines whether a user can borrow a book. It
uses [early returns](./functions#early-return) instead of `else` statements.

::: code-group

```js
function canBorrowBooks(isMember, outstandingFees, booksBorrowed) {
  // Check if the user is not a member
  if (!isMember) {
    console.log('Please register for a membership first.')
    return false // Early return if not a member
  }

  // Check for outstanding fees
  if (outstandingFees > 0) {
    console.log('Please settle your outstanding fees.')
    return false // Early return if there are outstanding fees
  }

  // Check if the user has borrowed too many books
  if (booksBorrowed >= 3) {
    console.log('You have reached your borrowing limit.')
    return false // Early return if the borrowing limit is reached
  }

  // If all checks pass
  console.log('You can borrow more books.')
  return true
}

// user is not a member
canBorrowBooks(false, 0, 0)

// user is a member but has outstanding fees
canBorrowBooks(true, 2.5, 1)
// Output: Please settle your outstanding fees.

// user is a member, no outstanding fees, but has reached borrowing limit
canBorrowBooks(true, 0, 3)
// Output: You have reached your borrowing limit.

// user is a member, no outstanding fees, and has not reached the borrowing limit
canBorrowBooks(true, 0, 2)
```

```console [output]
Please register for a membership first.
Please settle your outstanding fees.
You have reached your borrowing limit.
You can borrow more books.
```

:::
