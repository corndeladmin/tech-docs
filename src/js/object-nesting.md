# Object nesting

Some more complex data structures can be created by nesting lists and objects inside other objects.

Let's take a look at a complex user object.

```js
const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Sometown',
    county: 'Anyshire',
    postcode: 'AB1 2CD',
  },
  borrowedBooks: [
    {
      id: 1,
      title: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      year: 1985,
      isbn: '9780099740919',
    },
  ]
}
```

Adding nested objects and arrays to our objects allows us to represent more complex data structures.

## Nested objects and arrays

### Accessing nested objects

We can see that `address` is an object nested inside the `user` object.

We can _chain_ together the property names to access the nested object's properties.

```js
const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Sometown',
    county: 'Anyshire',
    postcode: 'AB1 2CD',
  },
  borrowedBooks: [
    {
      id: 1,
      title: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      year: 1985,
      isbn: '9780099740919',
    },
  ]
}

// Instead of writing
const address = user.address
console.log(address.street) // '123 Main St'

// we can chain this together and write
console.log(user.address.street) // '123 Main St'
```

### Accessing nested arrays

Similarly, for nested arrays we can write:

```js
const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Sometown',
    county: 'Anyshire',
    postcode: 'AB1 2CD',
  },
  borrowedBooks: [
    {
      id: 1,
      title: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      year: 1985,
      isbn: '9780099740919',
    },
  ]
}

console.log(author.books[0].title) // 'The Handmaid's Tale'
```

### Using array methods in nested arrays

We can even access array methods. Let's say we want to find the earliest year that a user borrowed a book.

```js
const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Sometown',
    county: 'Anyshire',
    postcode: 'AB1 2CD',
  },
  borrowedBooks: [
    {
      id: 1,
      title: 'The Handmaid\'s Tale',
      author: 'Margaret Atwood',
      year: 1985,
      isbn: '9780099740919',
    },
  ]
}

function findMinimumYear(minYear, book) {
  return Math.min(minYear, book.year)
}

const userEarliestBookYear = user.borrowedBooks
  .map(book => book.pages)
  .reduce(findMinimumYear, Infinity)
```

## Checking for null and undefined

We might want to check if a property exists before trying to access it.

Consider a user who hasn't borrowed any books yet. Their `borrowedBooks` property will be an empty array. This means that `user.borrowedBooks[0]` will not exist - it will be `undefined`.

```js
const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Sometown',
    county: 'Anyshire',
    postcode: 'AB1 2CD',
  },
  borrowedBooks: [],
}

console.log(user.borrowedBooks[0]) // undefined
```

If we try to access a property of `undefined`, we will get an error.

```js
// TypeError: Cannot read property 'title' of undefined
console.log(user.borrowedBooks[0].title) 
```

This means, if we want to access a property of a nested object, we need to check that the property exists before trying to access it.

```js
// null and undefined are false when evaluated as a boolean
if (user.borrowedBooks[0]) { 
  console.log(user.borrowedBooks[0].title)
}
```

Here's a function that returns the first book title if the user has borrowed any books.

It handles the case where the user hasn't borrowed any books by checking that `user.borrowedBooks[0]` exists before trying to access its `title` property.

```js
function returnFirstBookTitle(user) {
  if (user.borrowedBooks[0]) {
    return user.borrowedBooks[0].title
  }

  // If the user hasn't borrowed any books, 
  // this will end up returning undefined.
}
```

### Optional chaining

This is a nice syntax for checking if a property exists before trying to access it.

It uses the `?.` operator. It will check if the property exists before trying to access it and will return `undefined` if it doesn't exist.

Let's alter the function above and make it more concise by using optional chaining.

```js
function logFirstBookTitle(user) {
  return user.borrowedBooks[0]?.title
}
```

## Object equality

Oftentimes, we will want to check if two objects are equal.

You could try to compare two objects using the `===` operator, however this might not work as expected.

```js
const book1 = {
  id: 1,
  title: 'The Handmaid\'s Tale',
}

const book2 = {
  id: 1,
  title: 'The Handmaid\'s Tale',
}

console.log(book1 === book2) // false
```

This is because the `===` operator checks if the two objects are the same object in memory. In this case, `book1` and `book2` are two different objects in memory, so the result is `false`.

### Comparing object properties

What does it mean for two objects to be equal? 

We could say that two objects are equal if all their properties are equal.

```js
const book1 = {
  id: 1,
  title: 'The Handmaid\'s Tale',
}

const book2 = {
  id: 1,
  title: 'The Handmaid\'s Tale',
}

function areBooksEqual(book1, book2) {
  return book1.id === book2.id
    && book1.title === book2.title
}

console.log(areBooksEqual(book1, book2)) // true
```

This could work for simple objects, but it can get quite verbose and repetitive if we have lots of properties to compare.

### Using unique identifiers

You may have noticed that we have an `id` property on the book objects. This often represents a unique identifier for the object.

We can use this to check if two objects are equal, which makes it especially useful if the objects we're comparing are complex and deeply nested.

```js
const book1 = {
  id: 1,
  title: 'The Handmaid\'s Tale',
  previousLoans: [
    {
      id: 1,
      dates: {
        borrowed: '2020-01-01',
        returned: '2020-01-15',
      },
    },
    {
      id: 2,
      dates: {
        borrowed: '2020-02-01',
        returned: '2020-02-15',
      },
    },
  ],
}
const book2 = {
  id: 1,
  title: 'The Handmaid\'s Tale',
  previousLoans: [ /* Similar to above */ ],
}

function areBooksEqual(book1, book2) {
  return book1.id === book2.id
}
```

For users, it may be possible to use their email address as a unique identifier, if we can guarantee that each user has a unique email address.

```js
const user1 = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
}

const user2 = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
}
```

We can't make the same assumption for names though, as there could be multiple users with the same name.

```js
const user1 = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
}

const user2 = {
  name: 'Jane Doe',
  email: 'jane.s.doe@example.com',
}
