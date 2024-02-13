# Array `reduce`

We'll often want to use a loop to aggregate values. Aggregation is just a fancy
word for combining values together to make a single value at the end. Examples
of aggregation include summing numbers, counting items, and finding the maximum
or minimum value in a list.

## Aggregating using `reduce`

Whilst we can write our own loops, there's a more concise way to aggregate
values using the `reduce` method. This is similar to the `map` and `filter`
methods we've seen on arrays.

### Syntax

::: code-group

```js [Arrow function]
const result = list.reduce((accumulator, currentValue) => {
  // code block to be executed
}, initialValue)
```

```js [Named function]
function aggregateFunction(accumulator, currentValue) {
  // code block to be executed
}

const result = list.reduce(aggregateFunction, initialValue)
```

:::

The `reduce` method takes a function as its first argument and an initial value
as its second argument.

The aggregate function takes two arguments and returns a single value:

- The first argument is what's called the _accumulator_, which is initially set
  as the _initial value_.
- The second argument is the value of the _current item_ in the array.
- Finally, the value _returned_ by the function becomes the _new value of the
  accumulator_ for the next iteration.

The function then gets called again with the _new accumulator value_ and the
_next item_ in the array until there are no more items left to iterate through.

Once we've iterated through all the items in the array, the final value of the
accumulator is returned as the result of the `reduce` method.

### Taking the sum of a list

This is clearer with an example. Let's say we want to find the sum of all the
numbers in a list.

::: code-group

```js [Arrow function]
const numbers = [1, 2, 3, 4, 5]

const total = numbers.reduce((acc, curr) => acc + curr, 0)
```

```js [Named function]
const numbers = [1, 2, 3, 4, 5]

function sum(accumulator, currentValue) {
  return accumulator + currentValue
}

const total = numbers.reduce(sum, 0)
```

:::

Our aggregate function adds the accumulator and the current value together,
returning the result. The accumulator is the running total, and the current
value is the current number in the list.

### Counting the even numbers in a list

Here's a slightly more involved example. We'll count the number of even numbers
in a list.

We'll check if a number is even, and increment the accumulator if it is.

Otherwise, we'll just return the accumulator as-is

::: code-group

```js [Arrow function]
const numbers = [1, 2, 3, 4, 5]

const total = numbers.reduce((acc, curr) => {
  if (curr % 2 === 0) {
    return acc + 1
  } else {
    return acc
  }
}, 0)
```

```js [Named function]
const numbers = [1, 2, 3, 4, 5]

function countIfEven(accumulator, currentValue) {
  if (currentValue % 2 === 0) {
    return accumulator + 1
  } else {
    return accumulator
  }
}

const total = numbers.reduce(countIfEven, 0)

console.log(total)
```

```txt [Output]
2
```

:::

## Aggregating objects using reduce

We'll also want to aggregate data. This means combining multiple values into a
single value. Common examples are summing, taking the average, and finding the
maximum or minimum.

We can use the `reduce` method to do this.

The `reduce` method takes a function and a starting value as arguments.

Here is an example of using reduce to sum the number of available books.

```js
const books = [
  {
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: true
  },
  /* ... other books ... */
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true
  }
]

function countAvailableBooks(count, book) {
  // The tertiary operator is a shorthand for an if statement.
  // It's useful when you want to return one of two values depending on a condition.
  // In this case, we add 1 to the count if the book is available, and add 0 otherwise.
  return count + (book.isAvailable ? 1 : 0)
}

const numberOfAvailableBooks = books.reduce(countAvailableBooks, 0)
```

Let's dissect this a bit. We'll start with the second argument to `reduce`, the
starting value. This is the value that will be passed as the first argument to
the function on the first iteration. In this case, we want to start counting at
0, so we pass 0 as the starting value.

The first argument to `reduce` is a function, `countAvailableBooks`. This takes
two arguments.

The first is the value returned by the previous iteration of the function. In
this case, it's the `count` of the number of books we've seen so far.

The second argument is the current value in the list. In this case it's the
current `book`, which we use to check if it `isAvailable`.

Here's another example of using `reduce` to find the minimum year of
publication.

```js
const books = [
  {
    title: "The Handmaid's Tale",
    author: 'Margaret Atwood',
    year: 1985,
    isbn: '9780099740919',
    isAvailable: true
  },
  /* ... other books ... */
  {
    title: 'The Design of Everyday Things',
    author: 'Don Norman',
    year: 1988,
    isbn: '9780465050659',
    isAvailable: true
  }
]

function findMinimumYear(minYear, book) {
  return Math.min(minYear, book.year)
}

const minimumYear = books.reduce(findMinimumYear, Infinity)

// We can also write this out using arrow notation.
const minimumYear2 = books.reduce(
  (minYear, book) => Math.min(minYear, book.year),
  Infinity
)
```
