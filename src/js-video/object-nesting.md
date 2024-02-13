# Object nesting

<Vimeo id="912022303" />

## Creating nested objects

Some more complex data structures can be created by nesting lists and objects
inside other objects.

```js
const user = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  address: {
    street: '123 Main St',
    city: 'Sometown',
    county: 'Anyshire',
    postcode: 'AB1 2CD'
  },
  borrowedBooks: [
    {
      id: 1,
      title: "The Handmaid's Tale",
      author: 'Margaret Atwood',
      year: 1985,
      isbn: '9780099740919'
    }
  ]
}
```

## Accessing nested objects

We can _chain_ together the property names to access the nested object's
properties.

::: code-group

```js
console.log(user.address.street)
```

```console [output]
123 Main St
```

:::

## Accessing nested arrays

Similarly, for nested arrays we can write:

::: code-group

```js
console.log(author.books[0].title) // 'The Handmaid's Tale'
```

```console [output]
The Handmaid's Tale
```

:::

## Optional chaining

This is a nice syntax for checking if a property exists before trying to access
it.

```js
function logFirstBookTitle(user) {
  return user.borrowedBooks[0]?.title
}
```
