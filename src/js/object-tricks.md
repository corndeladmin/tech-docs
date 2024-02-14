# Object tricks

<Vimeo id="912022362" />

## Bracket notation

We can access properties using bracket notation.

::: code-group

```js
const book = {
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}

// Note that this string matches the title key in the book object
const property = 'title'

console.log(book[property])
```

```console [output]
The Handmaid's Tale
```

:::

## Object shorthand

There is a nice shorthand for creating objects. We often use this when we've
already defined some variables that we want to use as properties.

::: code-group

```js
const title = "The Handmaid's Tale"
const author = 'Margaret Atwood'

const book = {
  title,
  author,
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}

console.log(book)
```

```console [output]
{
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}
```

:::

## Object destructuring

There is a similarly nice shorthand for extracting properties from an object.

::: code-group

```js
const book = {
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}

const { title, author } = book

console.log(title)
console.log(author)
```

```console [output]
The Handmaid's Tale
Margaret Atwood
```

:::

::: tip

We see this used very often when importing modules:

```js
import { readFile } from 'fs'
```

:::
