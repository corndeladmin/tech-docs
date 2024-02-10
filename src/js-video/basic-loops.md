# Basic loops

## while loops

`while` loops are used to execute a block of code as long as a condition is
true.

```js
while (condition) {
  // code block to be executed
}
```

**Condition**: This is a boolean expression (i.e., something that evaluates to
true or false). It is checked each time before repeating the code block.

**Code block**: The set of instructions that will be executed repeatedly as long
as the condition holds true.

## Examples

### Printing numbers

This very simple `while` loop just prints some numbers.

::: tip

Make sure to click **output** to see what this prints to the console. Copy and
paste the code, change a few things and run it locally to experiment.

:::

::: code-group

```js
let i = 1

while (i < 6) {
  console.log(i)
  i++ // increase i by 1 at the end of each loop
}

console.log('Done!')
```

```[output]
1
2
3
4
5
Done!
```

:::

The `i++` is equivalent to `i = i + 1` in javascript. It is very important as it
guarantees the condition `i < 6` eventually fails.

### Adding up

Suppose we want to add all the odd numbers less than `100`.

::: code-group

```js
let n = 1
let total = 0 // we'll collect our answer here

while (n < 100) {
  total += n
  n += 2 // so n stays odd
}

console.log(total)
```

```[output]
2500
```

:::

## Looping through an array

Let's say we're working on a program that handles a messaging service.

Here is a loop which prints all the messages from an inbox to the console:

::: code-group

```js
const inbox = [
  'Zoja: Hi there, nice to meet you!',
  "Svetlana: Let's talk about your car's extended warranty.",
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!'
]

let i = 0 // the initial index

while (i < inbox.length) {
  console.log(inbox[i]) // print the message
  i++ // increase the index by 1
}
```

```[output]
Zoja: Hi there, nice to meet you!
Svetlana: Let's talk about your car's extended warranty.
Rufus: Drinks tonight?
Malak: I just bought the tickets!
```

:::

Because `i` is being increased by `1` each time the loop executes, the condition
`i < messages.length` will eventually become false (once all messages have been
printed).

## Solving problems with loops

Loops can be used to solve problems where we need to build up the solution
gradually.

For example, how many total characters are used in the inbox? Let's find out.

::: code-group

```js
const inbox = [
  'Zoja: Hi there, nice to meet you!',
  "Svetlana: Let's talk about your car's extended warranty.",
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!'
]

let total = 0
let i = 0 // start at index 0

while (i < inbox.length) {
  const message = inbox[i] // get the i^th message
  total += message.length // add its length to the total
  i++ // increment index
}

console.log(`${total} characters used!`)
```

```[output]
144 characters used!
```

:::

## `for` loops

There's a slightly more convenient syntax in javascript.

::: code-group

```js
for (let i = 1; i < 6; i++) {
  console.log(i)
}

console.log('Done!')
```

```[output]
1
2
3
4
5
Done!
```

:::

In this example,

- `let i = 1` is executed before the loop starts
- `i <= 10` is the condition
- `i++` is executed at the end of each iteration

The `while` loop is the most versatile, the `for` loop is concise and preferred
for simple loops. For example, to repeat the example above which adds the odd
numbers less than `100`, we could do

::: code-group

```js
let total = 0

for (let n = 1; n < 100; n += 2) {
  total += n
}

console.log(total)
```

```[output]
2500
```

:::
