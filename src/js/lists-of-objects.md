# Lists of objects

## Storing objects in a list

Frequently, we'll want to store a list of objects. The ease of use of objects
and the utility of lists mean that we'll often combine the two.

E.g. A library will store a list of books, employees, and users.

Let's look at how we might store a list of books.

::: info

In the following examples, we'll assume the `books` array is defined as below.
If you're copy and pasting the code to run it locally, make sure you have this
`books` array at the top of the file.

:::

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

We can see that we have several objects, each representing a book.

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
example, suppose we need to count how many bookes were published in the 20th
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

However, often this type of code can be made more concise by using methods such
as `.filter()` and `.map()`. We'll see some examples below.

## Filtering data

### Filtering by availability

Let's say we want to find all the books that are available.

We can use the `filter` method to do this.

The `filter` method takes a function as an argument. This function should return
a boolean value.

We often use arrow notation to define this function.

::: code-group

```js
const availableBooks = books.filter(book => book.isAvailable)
console.log(availeableBooks)
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

We've used arrow notation to define a function that takes a book as an argument
and returns its availablility `book.isAvailable`.

Here are a couple more examples of filtering data.

### Find unavailable books

::: code-group

```js
const unavailableBooks = books.filter(book => !book.isAvailable)
console.log(unavailableBooks)
```

```console{7,14} [output]
[
  {
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: false
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    isbn: '9780060929879',
    isAvailable: false
  }
]
```

:::

### Find books by an author

::: code-group

```js
const booksByMargaretAtwood = books.filter(
  book => book.author === 'Margaret Atwood'
)
console.log(bookeByMargaretAtwood)
```

```console{4,11} [output]
[
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
  }
]
```

:::

## Sorting data

We can use the `sort` array method to sort the list of books.

This method takes a _comparison function_ as an argument.

This function should take two arguments and return a number.

The number returned by the function determines the order of the two arguments.

| return value | sort order          |
| :----------: | ------------------- |
|     > 0      | sort a after b      |
|     < 0      | sort a before b     |
|    === 0     | keep original order |

Here is how we might sort the books by year, from oldest to newest.

::: code-group

```js
function compareBooksByYear(book1, book2) {
  return book1.year - book2.year
}

const sortedByYearAscending = books.sort(compareBooksByYear)

console.log(sortedByYearAscending)
```

```js
// we can also do this with an arrow function
const sortedByYearAscending = books.sort(
  (book1, book2) => book1.year - book2.year
)

console.log(sortedByYearAscending)
```

```console{5,12,19,26,33} [output]
[
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    isbn: '9780060929879',
    isAvailable: false
  },
  {
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: false
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true
  },
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
  }
]

```

:::

## Transforming data using map

Oftentimes, we'll want to transform the data in some way. We do this to make it
more readable, or to prepare it for use in another part of our program.

A common thing to do is to select particular properties from each object.

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

## Chaining transformations

To make our code more readable, we can chain transformations together.

Here's a way to find the number of available books.

::: code-group

```js
const numberOfAvailableBooks = books.filter(book => book.isAvailable).length
console.log(numberOfAvailableBooks)
```

```console [output]
3
```

:::

Similarly, we can chain together `filter` and `map` to find the titles of all
the available books.

::: code-group

```js
const titlesOfAvailableBooks = books
  .filter(book => book.isAvailable)
  .map(book => book.title)
```

```console [output]
[
  'Oryx and Crake',
  'The Geometry of Type',
  'The Design of Everyday Things'
]
```

:::

We can even use filter, map and sort to find the titles of books written by
Margaret Atwood, sorted by year of publication.

::: code-group

```js
const queryBooks = books
  .filter(book => book.author === 'Margaret Atwood')
  .sort((book1, book2) => book1.year - book2.year)
  .map(book => book.title)

console.log(queryBooks)
```

```console [output]
[ "The Handmaid's Tale", 'Oryx and Crake' ]
```

:::
