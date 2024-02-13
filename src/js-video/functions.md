# Functions

<Vimeo id="911842805" />

## Defining a function

Here is the basic syntac for defining a function.

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

The `return` value helps us receive a value from a function.

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
