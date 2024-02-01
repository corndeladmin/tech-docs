# Applied iteration

Now that we've seen loops and control flow, let's look at some common patterns for loops, iteration and its applications

## Array `forEach` method

We've seen the `for` loop and the `for ... of` loop. There's yet another way to iterate through an array: the `forEach` method.

The `forEach` method is similar to the `map` method we've seen on array methods. It takes a function as an argument, and applies that function to each item in the list.

### Syntax

```js
list.forEach(callbackFunction)
```

The callback function takes up to three arguments:

- The current item in the list
- The index of the current item
- The list itself

Oftentimes we'll only need the current item, so we'll just use one argument.

### Example

Let's say we want to print out each item in a list.

We can use the `forEach` method to iterate through the list, and print out each item.

::: code-group

```js [Named function]
const messages = [
  'Zoja: Hi there, nice to meet you!',
  'Svetlana: Let\'s talk about your car\'s extended warranty.',
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!',
]

function printItem(item) {
  console.log(item)
}

messages.forEach(printItem)
```

```js [Arrow function]
const messages = [
  'Zoja: Hi there, nice to meet you!',
  'Svetlana: Let\'s talk about your car\'s extended warranty.',
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!',
]

messages.forEach((message) => {
  console.log(message)
})
```

```txt [Output]
Zoja: Hi there, nice to meet you!
Svetlana: Let's talk about your car's extended warranty.
Rufus: Drinks tonight?
Malak: I just bought the tickets!
```

:::

## Aggregating using a loop

We'll often want to use a loop to aggregate values. Aggregation just is a fancy word for combining values together to make a single value at the end. Examples of aggregation include summing numbers, counting items, and finding the maximum or minimum value in a list.

### Example

Let's say we want to find the sum of all the numbers in a list.

We can use a `for` loop to iterate through the list, and add each number to a running total.

::: code-group

```js
const numbers = [1, 2, 3, 4, 5]

let sum = 0

for (const number of numbers) {
  sum += number
}

console.log(sum)
```

```txt [output]
15
```

:::

## Aggregating using `reduce`

There's a more concise way to aggregate values using the `reduce` method. This is similar to the `map` and `filter` methods we've seen on arrays.

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

The `reduce` method takes a function as its first argument and an initial value as its second argument.

The aggregate function takes two arguments and returns a single value:

- The first argument is what's called the _accumulator_, which is initially set as the _initial value_. 
- The second argument is the value of the _current item_ in the array. 
- Finally, the value _returned_ by the function becomes the _new value of the accumulator_ for the next iteration.

The function then gets called again with the _new accumulator value_ and the _next item_ in the array until there are no more items left to iterate through.

Once we've iterated through all the items in the array, the final value of the accumulator is returned as the result of the `reduce` method.

### Taking the sum of a list

This is clearer with an example. Let's say we want to find the sum of all the numbers in a list.

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

Our aggregate function adds the accumulator and the current value together, returning the result. The accumulator is the running total, and the current value is the current number in the list.

### Counting the even numbers in a list

Here's a slightly more involved example. We'll count the number of even numbers in a list.o

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