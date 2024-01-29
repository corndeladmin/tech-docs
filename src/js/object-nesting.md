# Object nesting

Some more complex data structures can be created by nesting lists and objects inside other objects.

E.g. We might have more information about a book's author than just their names. 

```js


```

## Nested objects

TODO: Find an excuse to do
```js
something.somethingElse.somethingElseAgain
```

TODO: Something like
```js
author.books[0].title
```

TODO: Something involving
```js
author.books.map(book => book.pages).reduce(sum)
```

## Checking for null and undefined

TODO: Something like
```js
if (book.checkedOutByUser === null) return
```

## Optional chaining

TODO: Introduce
```js
book.checkedOutByUser?.name
```

## Object equality

Why can't you just do `book1 === book2`?

What does it mean for two objects to be equal?

Using an `id` for equality
