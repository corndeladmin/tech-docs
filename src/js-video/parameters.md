# Parameters

<Vimeo id="911842787" />

## Defining parameters

A parameter is a placeholder for a value which will be supplied later.

```js
function addNumbers(x, y) {
  return x + y
}
```

## Using parameters

When calling a function, we provide arguments for the paramters.

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

## Early return

The `return` keyword can end a function early.

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
