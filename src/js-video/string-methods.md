# String Methods

## Concatenation

The `+` operator can be used to concatenate strings together.

```js
const firstName = 'Ada'
const lastName = 'Lovelace'

console.log(firstName + ' ' + lastName) // 'Ada Lovelace'
```

## Slice

We've seen how to use `slice` for arrays. We can also use it for strings.

```js
const quote = 'Stay awhile and listen!'
const excerpt = quote.slice(6, 11)

console.log(excerpt) // 'while'
```

## Template literals

We can use template literals to format strings. Template literals are enclosed
by backticks (`` ` ``) instead of single or double quotes. We can use them to
_interpolate_ variables into strings.

```js
const name = 'Ada Lovelace'

const formatString = `Hello, ${name}!`

console.log(formatString) // 'Hello, Ada Lovelace!'
```

## Trimming whitespace

Oftentimes we'll want to remove leading and trailing spaces from a string.

We can use `trim` to remove whitespace from the beginning and end of a string.

```js
const quote = '   Stay awhile and listen!   '

const trimmedQuote = quote.trim()

console.log(trimmedQuote) // 'Stay awhile and listen!'
```

## Changing case

We can use `toUpperCase` to convert a string to uppercase.

```js
const quote = 'Stay awhile and listen!'

const upperCaseQuote = quote.toUpperCase()

console.log(upperCaseQuote) // 'STAY AWHILE AND LISTEN!'
```

We can similarly use `toLowerCase` to convert a string to lowercase.

```js
const quote = 'Stay awhile and listen!'

const lowerCaseQuote = quote.toLowerCase()

console.log(lowerCaseQuote) // 'stay awhile and listen!'
```

## Formatting numbers

We can use `toFixed` to format a number to a fixed number of decimal places.

```js
const pi = 3.14159

const formattedPi = pi.toFixed(2)

console.log(formattedPi) // '3.14'
```

This is useful for formatting currency.

```js
const price = 4.9902573948

const formattedPrice = price.toFixed(2)

console.log(`£${formattedPrice}`) // '£4.99'
```

## Parsing numbers

We can use `parseInt` to parse a string into an integer.

```js
const age = '42'

const ageInTenYears = parseInt(age) + 10

console.log(age + 10) // 4210

console.log(ageInTenYears) // 52
```

We can also use `parseFloat` to parse a string into a floating-point number.

```js
const piString = '3.14159'

const pi = parseFloat(piString)
```
