# Array map

<Vimeo id="911915613" />

## Using `.map()`

We use `.map()` to create a new array by applying a function to each item in the
original array.

::: code-group

```js{10}
function readingTime(pages) {
  const time = (1.5 * pages) / 60
  const message = time + ' hours'
  return message
}

const pageNumbers = [300, 150, 120, 500, 250]

// make a new array with map:
const readingTimes = pageNumbers.map(readingTime)
console.log(readingTimes)
```

```console [output]
[
  '7.5 hours',
  '3.75 hours',
  '3 hours',
  '12.5 hours',
  '6.25 hours'
]
```

:::

## Arrow functions

It's very common to use arrow functions to define the transformation:

::: code-group

```js
const bookPrices = [15, 10, 7.5]

// map with an arrow function
const discountedPrice = bookPrices.map(price => 0.8 * price)

console.log(discountedPrices)
```

```console [output]
[ 12, 8, 6 ]
```

:::

::: tip

If you want to make a function which accepts an array and returns a mapped
array, you can do it very concisely by using the `return` keyword directly like
this:

```js
function getDiscountedPrices(bookPrices, discount) {
  return bookPrices(price => price * discount)
}
```

:::
