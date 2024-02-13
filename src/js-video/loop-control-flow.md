# Loop control flow

<Vimeo id="911915458" />

## Continue

We can use the `continue` keyword to skip any messages that contain the word
`warranty`.

::: code-group

```js
const comments = [
  "Zoja: I can't wait for the book signing!",
  "Svetlana: Let's talk about your car's extended warranty.",
  'Rufus: Drinks tonight?',
  'Malak: I just bought tickets!'
]

for (let message of comments) {
  // .includes() checks if a string contains another string
  if (message.includes('warranty')) {
    continue
  }

  console.log(message)
}
```

```txt [output]
Zoja: I can't wait for the book signing!
Rufus: Drinks tonight?
Malak: I just bought tickets!
```

:::

## Break

The `break` keyword cancels the loop. This saves us from iterating through the
rest of the comments once we've found the one we're looking for.

::: code-group

```js
const comments = [
  "Zoja: I can't wait for the book signing!",
  "Svetlana: Let's talk about your car's extended warranty.",
  'Rufus: Drinks tonight?',
  'Malak: I just bought tickets!'
]

for (let message of comments) {
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
