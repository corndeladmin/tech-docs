# Functions

Sometimes, we want to reuse particular parts of our code in several places. Copy
and pasting is bad, because if we need to change the code, we need to find
everywhere we pasted our code and change every instance.

Functions mean we do not need to copy and paste! We can define the code block in
one place, give that code block a name (the function name) and invoke the code
anywhere we like.

Let's see how to do this.

## Defining a function

To make a function, we

- use the `function` keyword
- followed by the desired name of the function
- then some parentheses `()` (we'll see why in the next guide!)
- finally the code block in curly brackets `{}`

like this

```js
function anyNameYouWant() {
  // code to be executed goes here
  const msg = 'No copy pasting needed!'
  console.log(msg)
}
```

## Using a function

To use the function elsewhere in our code, we write its name followed by
parentheses `()`.

::: code-group

```js
// define it once
function anyNameYouWant() {
  const msg = 'No copy pasting needed!'
  console.log(msg)
}

// use it many times
anyNameYouWant()
anyNameYouWant()
anyNameYouWant()
```

```console [output]
No copy pasting needed!
No copy pasting needed!
No copy pasting needed!
```

:::

## Return values

Sometimes, we want to get a value out of a function. For example, suppose we
want to generate id codes for our library. We might put the logic which creates
random id's into a function so we can use it for users, books, rooms, and so
on - all around our codebase.

But once our function calculates the id, how do we get it out of the function so
we can use it? That is what the `return` keyword is for!

::: code-group

```js{3}
function createId() {
  const id = 10 ** 3 + Math.floor(Math.random() * (10 ** 4 - 10 ** 3))
  return id
}

const userId = createId()
const bookId = createId()
const roomId = createId()

console.log(userId)
console.log(roomId)
console.log(bookId)
```

```console [output]
2289
6671
8274
```

:::

## Early return

A very important thing to bear in mind is that, if a `return` keyword runs in a
function, the rest of the function will not execute at all. This is called an
_early return_, and it's surprisingly useful.

::: code-group

```js
function logInUser() {
  // this will get printed
  console.log('User is logged in.')

  // the function stops here (early return)
  return true

  // this code will never run
  console.log('awww :(')
}
```

```console [output]
User is logged in.
```

:::
