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

## Transforming data using map

Oftentimes, we'll want to transform the data in some way. We do this to make it more readable, or to prepare it for use in another part of our program.

A common thing to do is to select particular properties from each object.

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

const bookTitles = books.map(book => book.title)

// The round brackets are necessary in addition to the curly braces when
// returning an object, otherwise javascript thinks it's a function body.
const bookTitleAndAuthor = books.map(book => ({ title: book.title, author: book.author }))
```

## Aggregating data using reduce

We'll also want to aggregate data. This means combining multiple values into a single value. Common examples are summing, taking the average, and finding the maximum or minimum. 

We can use the `reduce` method to do this.

The `reduce` method takes a function and a starting value as arguments.

Here is an example of using reduce to sum the number of available books.

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

function countAvailableBooks(count, book) {
  // The tertiary operator is a shorthand for an if statement.
  // It's useful when you want to return one of two values depending on a condition.
  // In this case, we add 1 to the count if the book is available, and add 0 otherwise.
  return count + (book.isAvailable ? 1 : 0)
}

const numberOfAvailableBooks = books.reduce(countAvailableBooks, 0)
```

Let's dissect this a bit. We'll start with the second argument to `reduce`, the starting value. This is the value that will be passed as the first argument to the function on the first iteration. In this case, we want to start counting at 0, so we pass 0 as the starting value.

The first argument to `reduce` is a function, `countAvailableBooks`. This takes two arguments. 

The first is the value returned by the previous iteration of the function. In this case, it's the `count` of the number of books we've seen so far. 

The second argument is the current value in the list. In this case it's the current `book`, which we use to check if it `isAvailable`.

Here's another example of using `reduce` to find the minimum year of publication.

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

function findMinimumYear(minYear, book) {
  return Math.min(minYear, book.year)
}

const minimumYear = books.reduce(findMinimumYear, Infinity)

// We can also write this out using arrow notation.
const minimumYear2 = books.reduce((minYear, book) => Math.min(minYear, book.year), Infinity)
```

## Chaining transformations

To make our code more readable, we can chain transformations together.

Here's another way to find number of available books.

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

const numberOfAvailableBooks = 
  books
    .filter(book => book.isAvailable)
    .length
```

Instead of using reduce, we've used `filter` to select only the available books, and then used `length` to count the number of books in the list.

Similarly, we can chain together `filter` and `map` to find the titles of all the available books.

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

const titlesOfAvailableBooks = 
  books
    .filter(book => book.isAvailable)
    .map(book => book.title)
```

We can even use filter, map and sort to find the titles of books written by Margaret Atwood, sorted by year of publication.

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

const titlesOfAvailableBooks = 
  books
    .filter(book => book.author === 'Margaret Atwood')
    .sort((book1, book2) => book1.year - book2.year)
    .map(book => book.title)
```
