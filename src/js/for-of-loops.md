# For of loops

<Vimeo id="911915469" />

## Average rating

Let's see how we'd us `for ... each` to refactor the average rating function.

::: code-group

```js
function average(arr) {
  let total = 0

  for (let x of arr) {
    total += x
  }

  return total / arr.length
}

const ratings = [4.25, 3.34, 2.6, 2.74, 2.36, 2.32, 3.94, 2.73]
console.log(average(ratings))
```

```console [output]
3.035
```

:::

::: tip

We chose the name `x` here to name the current array element, but any variable
name is fine.

:::
