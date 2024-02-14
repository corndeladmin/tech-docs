# Split and join

<Vimeo id="911915553" />

## Using split

The `.split()` method breaks a string in parts and puts them into an array. We
specify the string we want to split on.

::: code-group

```js
let genresString = 'Fantasy,Sci-Fi,Mystery,Romance'
let genresArray = genresString.split(',')
console.log(genresArray)
```

```console [output]
[ 'Fantasy', 'Sci-Fi', 'Mystery', 'Romance' ]
```

:::

## Individual letters

If we pass an empty string as our split argument, we get an array with all the
letters of the original string.

::: code-group

```js
let bookTitle = 'Persepolis'
let titleLetters = bookTitle.split('')
console.log(titleLetters)
```

```console [output]
[
  'P', 'e', 'r', 's',
  'e', 'p', 'o', 'l',
  'i', 's'
]

```

:::

## Join

The opposite of splitting is joining. We specify a string to sandwich between
the items in an array, and the array is joined into a single string.

::: code-group

```js
let bookTitles = ['The Great Gatsby', 'To Kill a Mockingbird', '1984']
let titlesString = bookTitles.join('; ')
console.log(titlesString)
```

```console [output]
The Great Gatsby; To Kill a Mockingbird; 1984
```

:::
