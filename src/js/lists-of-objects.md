# Lists of objects

## Storing objects in a list

Frequently, we'll want to store a list of objects. The ease of use of objects and the utility of lists mean that we'll often combine the two.

E.g. A library will store a list of books, employees, and users.

Let's look at how we might store a list of books.

```js
const books = [
  {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: true,
  },
  {
    title: 'Oryx and Crake',
    author: 'Margaret Atwood',
    year: 2003,
    isbn: '9780385721677',
    isAvailable: true,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    isbn: '9780060929879',
    isAvailable: false,
  },
  {
    title: 'The Geometry of Type',
    author: 'Stephen Coles',
    year: 2013,
    isbn: '9780500241424',
    isAvailable: true,
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true,
  },
]

```

We can see that we have several objects, each representing a book. 

We can access the properties of each book in the same way as we would for a single object.

```js
const books = [
  {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: true,
  },
/* ... other books ... */
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true,
  },
]

console.log(books[0].title) // The Handmaid's Tale
```


## Filtering data

### Filtering by availability

Let's say we want to find all the books that are available.

We can use the `filter` method to do this.

The `filter` method takes a function as an argument. This function should return a boolean value.

We often use arrow notation to define this function.

```js
const books = [
  {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: true,
  },
  {
    title: 'Oryx and Crake',
    author: 'Margaret Atwood',
    year: 2003,
    isbn: '9780385721677',
    isAvailable: true,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    isbn: '9780060929879',
    isAvailable: false,
  },
  {
    title: 'The Geometry of Type',
    author: 'Stephen Coles',
    year: 2013,
    isbn: '9780500241424',
    isAvailable: true,
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true,
  },
]

const availableBooks = books.filter(book => book.isAvailable)
```

We've used arrow notation to define a function that takes a book as an argument and returns its availablility `book.isAvailable`.

Here are a couple more examples of filtering data.

```js
const unavailableBooks = books.filter(book => !book.isAvailable)
const booksByMargaretAtwood = 
  books.filter(book => book.author === 'Margaret Atwood')
```

## Sorting data

We can use the `sort` array method to sort the list of books.

This method takes a _comparison function_ as an argument.

This function should take two arguments and return a number.

The number returned by the function determines the order of the two arguments.

| return value | sort order |
| - | - |
| > 0 | sort a after b |
| < 0 | sort a before b |
| === 0 | keep original order |

Here is how we might sort the books by year, from oldest to newest.

```js
const books = [
  {
    title: 'The Handmaid\'s Tale',
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: true,
  },
  {
    title: 'Oryx and Crake',
    author: 'Margaret Atwood',
    year: 2003,
    isbn: '9780385721677',
    isAvailable: true,
  },
  {
    title: 'Brave New World',
    author: 'Aldous Huxley',
    year: 1932,
    isbn: '9780060929879',
    isAvailable: false,
  },
  {
    title: 'The Geometry of Type',
    author: 'Stephen Coles',
    year: 2013,
    isbn: '9780500241424',
    isAvailable: true,
  },
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true,
  },
]

function compareBooksByYear(book1, book2) {
  return book1.year - book2.year
}

const sortedByYearAscending = books.sort(compareBooksByYear)

// We can also write this out using arrow notation.
const sortedByYearAscending2 = 
  books.sort((book1, book2) => book1.year - book2.year)
```

TODO: Sort by title

## Transforming data

Chaining Map 

TODO: Map titles

TODO: Map titles, then translate to pig latin

## Aggregating data

Reduce

TODO: Count all books

TODO: Minimum year

### Chaining transformations

Chaining filter, map, and reduce

TODO: Count available books

TODO: Count books by author

