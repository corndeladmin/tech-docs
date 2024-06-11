# Arrays

<Vimeo id="911915655" />

## Accessing items

We access items using their index, starting from `0`.

::: code-group

```js
const books = [
  'Things Fall Apart',
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]

console.log(books[0])
console.log(books[3])
```

```console [output]
Things Fall Apart
The God of Small Things
```

:::

## Modifying items

We can assign new values to indices.

::: code-group

```js
const books = [
  'Things Fall Apart',
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]

books[2] = 'The Kite Runner'
console.log(books)
```

```console [output]
Things Fall Apart
Beloved
The Kite Runner
The God of Small Things
Persepolis
```

:::

::: info

We used `const books = `, so why are we allowed to change the array? The `books`
variable is the "container", but we're allowed to change what it contains. It is
still the same array, just with different contents now.

:::

## Array `.length`

The `.length` property of an array returns the number of elements it contains.

::: code-group

```js
const books = [
  'Things Fall Apart',
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]

console.log(books.length)
```

```console [output]
5
```

:::

This property is useful for accessing the last elements.

::: code-group

```js
const books = [
  'Things Fall Apart',
  'Beloved',
  'One Hundred Years of Solitude',
  'The God of Small Things',
  'Persepolis'
]

console.log(books[books.length - 1])
console.log(books[books.length - 2])
```

```console [output]
Persepolis
The God of Small Things
```

:::
