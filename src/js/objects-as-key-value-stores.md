# Objects as key-value stores

Objects are a fundamental part of JavaScript. They are used to represent data in a structured way. E.g. a user object might have a name, an age, and an email address. A book object might have a title, an author, and a year of publication. A car object might have a make, a model, and a year of manufacture. Objects are used to represent all of these things and more.

In this section, we will learn how to create objects, how to access their properties, and how to add and set properties on them.

## Object notation

Say we're writing software to manage a library, so we might want to represent a book as an object. What properties of the book might we be interested in?

We might want to know the title, the author, the year of publication, the ISBN number, and whether or not it's available to borrow. 

We could structure the data like so:

```js
const book = {
  title: 'The Handmaid\'s Tale',
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true,
}
```

We can see that a JavaScript object is made up properties - pairs of keys and values.

## Accessing object properties

Now that we've structured the book data, we can access its properties using the dot `.` notation:

```js
const book = {
  title: 'The Handmaid\'s Tale',
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true,
}

console.log(`${book.title} by ${book.author}`)
// The Handmaid's Tale by Margaret Atwood
```

## Writing properties

Say we want to update the availability of the book.

We can do this in a similar way to assigning a variable:

```js
const book = {
  title: 'The Handmaid\'s Tale',
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true,
}

function printAvailability(book) {
    if (book.isAvailable) {
        console.log(`${book.title} is available to borrow`)
    } else {
        console.log(`${book.title} is not available to borrow`)
    }
}

printAvailability(book) // The Handmaid's Tale is available to borrow

book.isAvailable = false

printAvailability(book) // The Handmaid's Tale is not available to borrow
```

We can also use this to add a new property. Say we want to add a `borrower` property to the book object:

```js
const book = {
  title: 'The Handmaid\'s Tale',
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true,
}

book.borrower = 'Andy'
```

We've just added a new property `borrower` to the `book` object, and set its value to `Andy`.

## Bracket notation

We've seen how to access properties using dot notation, but there's another way to access properties to read or assign them - using bracket notation.

This is similar to how we access items in an array, but instead of using an index, we use a key:

```js
const book = {
  title: 'The Handmaid\'s Tale',
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true,
}

console.log(book['title']) // The Handmaid's Tale
```

Note the quotes around the key, which makes the key a string.

We generally prefer dot notation over bracket notation because it's shorter and easier to read. However, there are times when we need to use bracket notation. For example, if we want to access a property using a variable:

```js
const book = {
  title: 'The Handmaid\'s Tale',
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true,
}

const property = 'title'

console.log(book[property]) // The Handmaid's Tale
```