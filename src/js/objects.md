# Objects

<Vimeo id="912022380" />

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
