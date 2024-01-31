# Basic loops

## While loops

### Syntax

While loops are used to execute a block of code as long as a condition is true.

```js
while (condition) {
  // code block to be executed
}
```

### Example

Let's say we're working on a program that handles a messaging service.

Here is an example of a while loop that prints out messages to the console from an inbox until there are no more messages left.

::: code-group

```js
const messages = [
  'Zoja: Hi there, nice to meet you!',
  'Svetlana: Let\'s talk about your car\'s extended warranty.',
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!',
]

// Print out all messages in the inbox
while (messages.length > 0) {
  console.log(messages.shift())
}
```

```txt [output]
Zoja: Hi there, nice to meet you!
Svetlana: Let's talk about your car's extended warranty.
Rufus: Drinks tonight?
Malak: I just bought the tickets!
```

:::

Note that this loop removes the messages from the inbox as it prints them out. We can iterate through the messages without removing them like so:

```js
const messages = [
  'Zoja: Hi there, nice to meet you!',
  'Svetlana: Let\'s talk about your car\'s extended warranty.',
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!',
]

// Print out all messages in the inbox
let i = 0
while (i < messages.length) {
  console.log(messages[i])
  i++
}
```

This pattern of incrementing a variable is very common, so there's another type of loop that makes this easier to write. These are called `for` loops.

## For loops

### Syntax

For loops are often used to execute a block of code a specified number of times.

They usually look like the below:

```js
for (let i = 0; i < 100; i++) {
  // code block to be executed
}
```

Let's break down the syntax a bit:

- `let i = 0` - This is the initialization. We're declaring a variable `i` and setting it to `0`.
- `i < 100` - This is the condition. The loop will continue to run as long as this condition is true.
- `i++` - This is the final expression. It will be executed after each iteration of the loop. In this case, we're incrementing `i` by 1.

### Example

Let's iterate through our messages again, but this time using a for loop.

::: code-group

```js
const messages = [
  'Zoja: Hi there, nice to meet you!',
  'Svetlana: Let\'s talk about your car\'s extended warranty.',
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!',
]

// Print out all messages in the inbox
for (let i = 0; i < messages.length; i++) {
  console.log(messages[i])
}
```

```txt [output]
Zoja: Hi there, nice to meet you!
Svetlana: Let's talk about your car's extended warranty.
Rufus: Drinks tonight?
Malak: I just bought the tickets!
```

:::

We can see the similarity between the `for` loop and the while loop. The `for` loop is a bit more concise, and it's easier to see the initialization, condition, and final expression all in one place.

## Using `for ... of` syntax

### Syntax

We'll regularly iterate through lists and other similar structures. There's a nicer syntax to do this called `for ... of`.

```js
for (const item of list) {
  // code block to be executed
}
```

We can use this to iterate over our messages like so:

::: code-group

```js
const messages = [
  'Zoja: Hi there, nice to meet you!',
  'Svetlana: Let\'s talk about your car\'s extended warranty.',
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!',
]

for (const message of messages) {
  console.log(message)
}
```

```txt [output]
Zoja: Hi there, nice to meet you!
Svetlana: Let's talk about your car's extended warranty.
Rufus: Drinks tonight?
Malak: I just bought the tickets!
```

:::
