# Loop control flow

## Skipping the rest of a loop

We can use the `continue` keyword to skip the rest of a loop and move on to the
next iteration.

This is useful if we want to skip a particular item in a list, or if we want to
skip the rest of the loop if a certain condition is met.

### Example

Perhaps we want to filter out spam messages from our inbox.

We can use the `continue` keyword to skip any messages that contain the word
`warranty`.

::: code-group

```js
const inbox = [
  'Zoja: Hi there, nice to meet you!',
  "Svetlana: Let's talk about your car's extended warranty.",
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!'
]

for (let i = 0; i < inbox.length; i++) {
  const message = inbox[i]

  // .includes() checks if a string contains another string
  if (message.includes('warranty')) {
    continue
  }

  console.log(message)
}
```

```txt [output]
Zoja: Hi there, nice to meet you!
Rufus: Drinks tonight?
Malak: I just bought the tickets!
```

:::

## Breaking out of a loop

We can use the `break` keyword to break out of a loop.

This is useful if we want to stop iterating through a list once we've found what
we're looking for.

### Example

Perhaps we're looking for a message from a particular person, and we want to
stop iterating through the list once we've found it.

Let's say we're looking for the first message from Rufus.

::: code-group

```js
const messages = [
  'Zoja: Hi there, nice to meet you!',
  "Svetlana: Let's talk about your car's extended warranty.",
  'Rufus: Drinks tonight?',
  'Malak: I just bought the tickets!'
]

for (let i = 0; i < inbox.length; i++) {
  // .startsWith() checks if a string starts with another string
  if (message.startsWith('Rufus')) {
    console.log(message)
    break
  }
}
```

```txt [output]
Rufus: Drinks tonight?
```

:::

This saves from having to iterate through the rest of the messages once we've
found the one we're looking for.
