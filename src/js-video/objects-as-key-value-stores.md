# Objects as key-value stores

Objects are a fundamental part of JavaScript. They are used to represent data in
a structured way.

- A **user** object might have a name, an age, and an email address.
- A **book** object might have a title, an author, and a year of publication.
- A **car** object might have a make, a model, and a year of manufacture.

Objects are used to represent all of these things and more. In this section, we
will learn how to create objects, how to access their properties, and how to add
and set properties on them.

## Object notation

In JavaScript, we can create a new object using _braces_ like this: `{}`. Let's
see how this works with an example.

Say we're writing software to manage a library, so we might want to represent a
book as an object:

```js
const book = {
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}
```

We can see that a JavaScript object is made up of properties - pairs of keys and
values.

The value of an object property can be pretty much anything. In our example
book, we've got a string, a number, and a boolean.

## Accessing properties

Now that we've structured the book data, we can access its properties using the
dot `.` notation:

::: code-group

```js
const book = {
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}

console.log(`${book.title} by ${book.author}`)
```

```[output]
The Handmaid's Tale by Margaret Atwood
```

:::

## Updating properties

Say we want to update the availability of the book.

We can do this in a similar way to assigning a variable:

::: code-group

```js{6}
const book = {
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}

// Change the value of the .isAvailable property
book.isAvailable = false

console.log(book)
```

```console{6} [output]
{
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: false
}
```

:::

## Adding properties

We can also use this to add a new property. Say we want to add a `borrower`
property to the book object:

::: code-group

```js
const book = {
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}

book.borrower = 'Andy'

console.log(book)
```

```console{7} [output]
{
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true,
  borrower: 'Andy'
}
```

:::

We've just added a new property `borrower` to the `book` object, and set its
value to `'Andy'`.

## Bracket notation

We've seen how to access properties using dot notation, but there's another way
to access properties to read or assign them - using bracket notation.

This is similar to how we access items in an array, but instead of using an
index, we use a key:

```js
const book = {
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}

console.log(book['title']) // The Handmaid's Tale

book['isAvailable'] = false
```

Note the quotes around the key, which makes the key a string.

We generally prefer dot notation over bracket notation because it's shorter and
easier to read. However, there are times when we need to use bracket notation.
For example, if we want to access a property using a variable:

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

console.log(book[property]) // The Handmaid's Tale
```

## Object shorthand

There is a nice shorthand for creating objects. We often use this when we've
already defined some variables that we want to use as properties.

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
```

## Object destructuring

There is a similarly nice shorthand for extracting properties from an object.

Say we want to read the title and author of a book, and assign them to
variables.

```js
const book = {
  title: "The Handmaid's Tale",
  author: 'Margaret Atwood',
  year: 1985,
  isbn: '9780099740919',
  isAvailable: true
}

const { title, author } = book

console.log(title) // The Handmaid's Tale
console.log(author) // Margaret Atwood
```

We see this used very often when importing modules:

```js
import { readFile } from 'fs'
```
