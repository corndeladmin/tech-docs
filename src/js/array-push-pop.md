# Array push and pop

<Vimeo id="911915636" />

## Push and unshift

We can use `.push()` to add a new item to the end of the array, whereas
`.unshift()` adds an item to the beginning.

::: code-group

```js
const authors = [
  'Chinua Achebe',
  'Toni Morrison',
  'Gabriel García Márquez',
  'Arundhati Roy',
  'Marjane Satrapi'
]

authors.push('Amy Tan') // add the the end
authors.unshift('Sandra Cisneros') // add to the beginning

console.log(authors)
```

```console [output]
[
  'Sandra Cisneros',
  'Chinua Achebe',
  'Toni Morrison',
  'Gabriel García Márquez',
  'Arundhati Roy',
  'Marjane Satrapi',
  'Amy Tan'
]
```

:::

## Pop and shift

The `.pop()` method will remove and return the final item of the array, whereas
`.shift()` removes and returns the first item.

::: code-group

```js
const authors = [
  'Chinua Achebe',
  'Toni Morrison',
  'Gabriel García Márquez',
  'Arundhati Roy',
  'Marjane Satrapi'
]

const lastAuthor = authors.pop()
const firstAuthor = authors.shift()

console.log(lastAuthor)
console.log(firstAuthor)
console.log(authors)
```

```console [output]
Marjane Satrapi
Chinua Achebe
[
  'Toni Morrison',
  'Gabriel García Márquez',
  'Arundhati Roy'
]
```

:::

::: tip

Note that `.pop` and friends modify the array "in place", meaning they do not
return a new array but modify an old one. If you need to modify an array and
return it from within a function, you need to use the methods and then return on
a different line. For example,

```js
function shiftRight(arr) {
  const last = arr.pop()
  arr.unshift(last)
  return arr
}
```
