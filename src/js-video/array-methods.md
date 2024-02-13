# Array methods

Now that we're familiar with arrays, let's look at some of the methods we can
use to manipulate them.

## Adding and removing items from an array

### Using `push()`

We can add items to an array using the `push()` method. Let's say we want to add
a new resolution to our list:

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]

resolutions.push('Learn to code')
```

This will add the new resolution to the end of the array:

```js
;[
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal',
  'Learn to code'
]
```

### Using `pop()`

We can remove the last item from an array using the `pop()` method:

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]

const lastResolution = resolutions.pop()

console.log(resolutions) // ['Pick up knitting', 'Practice the violin more']

console.log(lastResolution) // 'Use a bullet journal'
```

### Using `shift()` and `unshift()`

We can also add and remove items from the beginning of an array using the
`shift()` and `unshift()` methods.

This works in a similar way to `push()` and `pop()`, but from the start of an
array.

The `unshift()` method adds an item to the beginning of an array.

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]

resolutions.unshift('Learn to code')
```

Now `resolutions` contains the following items:

```js
;[
  'Learn to code',
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]
```

Similarly, `shift()` removes the first item from an array.

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]

resolutions.shift()
```

Now `resolutions` contains the following items:

```js
;['Practice the violin more', 'Use a bullet journal']
```

## Joining two arrays together

### Using `concat()`

Say we have two lists of new year's resolutions:

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]

const moreResolutions = [
  'Learn to code',
  'Learn to fly a helicopter',
  'Repaint the house'
]
```

We can join these two arrays together using the `concat()` method:

```js
resolutions.concat(moreResolutions)
```

This will return a new array containing all of the items from both arrays:

```js
;[
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal',
  'Learn to code',
  'Learn to fly a helicopter',
  'Repaint the house'
]
```

## Transforming all items in an array

Let's say we want to add an exclamation mark to the end of each resolution in
our list, because we're super excited about them!

We can do this using the `map()` method:

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]

const excitedResolutions = resolutions.map(resolution => resolution + '!')
```

This will return a new array containing all of the items from the original
array, with an exclamation mark added to the end of each item:

```js
;['Pick up knitting!', 'Practice the violin more!', 'Use a bullet journal!']
```

We've used an arrow function here, but we could also use a regular function:

```js
function addExclamationMark(resolution) {
  return resolution + '!'
}

const excitedResolutions = resolutions.map(addExclamationMark)
```

Here, we've defined a function called `addExclamationMark()` that takes a single
argument, `resolution`. The function returns the resolution with an exclamation
mark added to the end.

We then pass this function as an argument to the `map()` method. The `map()`
method will take each item in the array and pass them through the function,
returning a new array containing the transformed items.

## Filtering an array

Let's say we want to filter our list of resolutions to only include resolutions
that contain the word "knitting".

We can do this using the `filter()` method:

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]

const knittingResolutions = resolutions.filter(resolution =>
  resolution.includes('knitting')
)
```

This will return a new array containing only the resolutions that contain the
word "knitting":

```js
;['Pick up knitting']
```

Filtering an array is similar to mapping an array, but instead of transforming
each item in the array, we're filtering out items that don't match a certain
condition.

Here's another example where we only want to include even numbers in an array:

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const evenNumbers = numbers.filter(number => number % 2 === 0)

console.log(evenNumbers) // [2, 4, 6, 8]
```

The statement `number % 2 === 0` will return `true` if the number is even, and
`false` if it's odd. The `filter()` method will only include items in the new
array if the statement returns `true`.
