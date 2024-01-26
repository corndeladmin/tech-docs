# Working with arrays

A neat way to organise data in real life is by making lists. Here's a list of my
new years' resolutions:

> **My resolutions**
>
> 1. Learn how to knit
> 2. Practice the violin more
> 3. Use a bullet journal

Let's write that list in JavaScript, as an _array_:

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal'
]
```

## Reading an entry

We can access the first entry like so:

```js
resolutions[0] // 'Pick up knitting'
```

The number in the square brackets is called an _index_. It tells us which
element in the array we want to access. In JavaScript, the first entry in an
array has an index of `0`, the second entry has an index of `1`, and so on. Most
programming languages are 'zero-indexed' like this.

## Modifying an entry

We can also modify entries in the array:

```js
resolutions[1] = 'Learn how to play the drums instead'
```

What does this line do?

If we look at our array now, we'll see that the _second_ item has changed:

```js
;[
  'Pick up knitting',
  'Learn how to play the drums instead',
  'Use a bullet journal'
]
```

We've given up on practising the violin more, and we've decided to learn how to
play the drums instead. Sorry, neighbours!

## Using `Array.length`

What if we have a really long list of resolutions? We can use the `length`
property to find out how many items are in the array:

```js
const resolutions = [
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal',
  'Learn to fly a helicopter',
  'Repaint the house',
  'Camp out in Alaska',
  'Build a treehouse',
  'Live off the grid',
  'Found a new country',
  'Build a rocket'
]

resolutions.length // 10
```

Let's access the last item in the array. What index do we need to use?

There are `10` items in the array, but the last item has an index of `9`. Why?
Remember that the first item has an index of `0`.

Knowing this, we can use the `length` property to access the last item in the
array:

```js
resolutions[resolutions.length - 1] // 'Build a rocket'
```

## Slicing an array

We can also use the `slice()` method to get a _slice_ of an array. This is
useful if we want to get a range of items from an array.

Let's say we want to get the first four resolutions. We can do this like so:

```js
resolutions.slice(0, 4)
```

This will return the first four items in the array:

```js
;[
  'Pick up knitting',
  'Practice the violin more',
  'Use a bullet journal',
  'Learn to fly a helicopter'
]
```

If we wanted to omit the first item, we could do this:

```js
resolutions.slice(1, 4)
```

This will return the second, third and fourth items in the array:

```js
;[
  'Practice the violin more',
  'Use a bullet journal',
  'Learn to fly a helicopter'
]
```

::: tip

When you use `.slice(a, b)`, the element at index `a` _will_ be included, but
the element at index `b` will _not_.

:::
