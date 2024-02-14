# String formatting

<Vimeo id="911915571" />

## Upper and lowercase

We can change the case of strings with `.toUpperCase()` and `.toLowerCase()`

::: code-group

```js
const quote = 'The house on Mango Street isn’t it.'

console.log(quote.toUpperCase())
console.log(quote.toLowerCase())
```

```console [output]
THE HOUSE ON MANGO STREET ISN’T IT.
the house on mango street isn’t it.
```

:::

## Slice

Slice works with strings just the same as it works with arrays.

::: code-group

```js
const quote = 'The house on Mango Street isn’t it.'
console.log(quote.slice(13, 25))
```

```console [output]
Mango Street
```

:::

## Template literals

We can interpolate values into strings using backticks `` ` `` and `${}`.

::: code-group

```js
const author = 'Min Jin Lee'
const book = 'Pachinko'
const year = 2017

const summary = `${author} wrote ${book} in ${year}`
console.log(summary)
```

```console [output]
Min Jin Lee wrote Pachinko in 2017
```

:::

## Trim

We can remove whitespace from the beginning and end of a string with `trim()`

::: code-group

```js
const quote = '   Stay awhile and listen!   '
const trimmedQuote = quote.trim()
console.log(trimmedQuote)
```

```console [output]
Stay awhile and listen!
```

:::

## Formatting numbers

We can use `.toFixed()` to turn a number into a string with the given number of
decimals.

::: tip

Note that traling `0`s are included, which makes it good for formatting
currency.

:::

::: code-group

```js
const price = 2.39782
const displayPrice = price.toFixed(2)
console.log('£' + displayPrice)
```

```console [output]
£2.40
```

:::
