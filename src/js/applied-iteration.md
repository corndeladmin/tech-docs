# Applied iteration

Now that we've seen loops and control flow, let's look at some common patterns
for loops, iteration and its applications.

## `for` ... `of` loops

When iterating through arrays, `while` loops and `for` loops require us to
manually manage the index we're currently pointing at. Whilst that gives a lot
of flexibility, it's quite tiresome to write if we simply want to loop through
an array.

### Syntax

Fortunately, there is a useful syntax for that: the "`for` ... `of` loop".

```js
for (let element of array) {
  // do something with `element`
}
```

### Example

Let's say we want to print out each item in an array.

::: code-group

```js
const inbox = [
  'Zoja: Hi there, nice to meet you!',
  "Svetlana: Let's talk about your car's extended warranty.",
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!'
]

for (let message of inbox) {
  console.log(message)
}
```

```[output]
Zoja: Hi there, nice to meet you!
Svetlana: Let's talk about your car's extended warranty.
Rufus: Drinks tonight?
Malak: I just bought the tickets!
```

:::

We could have used any variable name we like instead of `message` -
`for (let x of inbox)` is valid, if a bit less readable.

## Nested loops

We are sometimes required to perform a loop within another loop.

### Using `for` ... `of`

Suppose we want to allow our users to search their messages? We'll start
simple - when the user types a single letter in the search box, we'll tell them
how many times it occurs in their messages.

::: code-group

```js
const inbox = [
  'Zoja: Hi there, nice to meet you!',
  "Svetlana: Let's talk about your car's extended warranty.",
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!'
]

const search = 'r'
let count = 0

for (const message of inbox) {
  for (const character of message) {
    if (character.toLowerCase() === search) {
      count += 1
    }
  }
}

console.log(count)
```

```[output]
7
```

:::

### With `while` loops

There's a bit more reading to do with nested `while` loops, but the idea is the
same.

Let's print a nice picture to complete our exploration of loops.

Can you guess what it is before looking at the output?

::: code-group

```js
const rows = 10

let i = 1
while (i <= rows) {
  let line = ''

  let j = 0
  while (j < i) {
    line += '*'
    j++
  }

  console.log(line)
  i++
}
```

```[output]
*
**
***
****
*****
******
*******
********
*********
**********
```

:::
