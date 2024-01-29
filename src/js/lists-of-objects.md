# Lists of objects

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


## Filtering and sorting

TODO: Filter by availability

TODO: Filter by author

TODO: Sort by year

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

