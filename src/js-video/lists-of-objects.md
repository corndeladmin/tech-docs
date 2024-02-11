# Lists of objects

<Vimeo id="912022325" />

## Storing objects in a list

The ease of use of objects and the utility of lists mean that we'll often
combine the two.

```js
const books = [
  {
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: false
  },
  {
    title: 'Oryx and Crake',
    author: 'Margaret Atwood',
    year: 2003,
    isbn: '9780385721677',
    isAvailable: true
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    isbn: '9780060929879',
    isAvailable: false
  },
  {
    title: 'The Geometry of Type',
    author: 'Stephen Coles',
    year: 2013,
    isbn: '9780500241424',
    isAvailable: true
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true
  }
]
```

We can access the properties of each book in the same way as we would for a
single object.

::: code-group

```js
console.log(books[0].title)
console.log(books[2].author)
console.log(books[books.length - 1].year)
```

```console [output]
The Handmaid's Tale
Aldous Huxley
1988
```

:::

## Using loops

We can use our knowledge of loops to solve problems on arrays of objects. For
example, suppose we need to count how many books were published in the 20th
century.

::: code-group

```js
let count = 0

for (let book of books) {
  if (book.year < 2000) {
    count++
  }
}

console.log(count)
```

```console [output]
3
```

:::

## Transforming with map

Oftentimes, we'll want to transform the data in some way. A common thing to do
is to select particular properties from each object.

::: code-group

```js
const bookTitles = books.map(book => book.title)
console.log(bookTitles)
```

```console [output]
[
  "The Handmaid's Tale",
  'Oryx and Crake',
  'Brave New World',
  'The Geometry of Type',
  'The Design of Everyday Things'
]
```

:::

## Filtering data

Let's say we want to find all the books that are available.

::: code-group

```js
const availableBooks = books.filter(book => book.isAvailable)
console.log(availableBooks)
```

```console{7,14,21} [output]
[
  {
    title: 'Oryx and Crake',
    author: 'Margaret Atwood',
    year: 2003,
    isbn: '9780385721677',
    isAvailable: true
  },
  {
    title: 'The Geometry of Type',
    author: 'Stephen Coles',
    year: 2013,
    isbn: '9780500241424',
    isAvailable: true
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true
  }
]
```

:::
