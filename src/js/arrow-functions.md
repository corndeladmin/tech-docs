# Arrow functions

## Defining an arrow function

An arrow function is just a different way of writing a function:

::: code-group

```js
const addNumbers = (x, y) => {
  const result = x + y
  return result
}

console.log(addNumbers(2, 3))
```

```txt [output]
5
```

:::

## Implicit return

If you do not place curly brackets `{}` around the body of the function, then
the value to the right of the arrow is assumed to be the return value of the
function, and you don't need to actually write `return`.

::: code-group

```js
const multiplyNumbers = (x, y) => x * y

console.log(multiplyNumbers(7, 3))
```

```txt [output]
21
```

:::

::: info

There are some very subtle differences between arrow functions and regular
functions. We won't need to understand theses differences for a while, so we
won't go into detail here.

:::
