# Array slice

<Vimeo id="911915645" />

## Using `.slice()`

Here is an example of using slice.

::: code-group

```js
const books = [
  'Things Fall Apart',
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]

console.log(books.slice(1, 4))
```

```console [output]
[
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things'
]
```

:::

::: tip

When using `.slice(a, b)`, the item at index `a` _is_ included, but the item at
index `b` is _not_.

:::

## With one argument

If slice is called with one argument, it slices to the end of the array.

::: code-group

```js
const books = [
  'Things Fall Apart',
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]

console.log(books.slice(2))
```

```console [output]
[
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]
```

:::

## Negative indices

If we pass a negative index, the indices count from the end of the array, with
`-1` representing the index of the final item.

::: code-group

```js
const books = [
  'Things Fall Apart',
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]

console.log(books.slice(-2))
```

```console [output]
[ 'The God of Small Things', 'Persepolis' ]
```

:::
