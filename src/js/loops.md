# Loops

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

```js
// Don't worry about understanding this inbox object fully!
const inbox = {
  messages: [
      { from: 'John', content: 'Hi there, nice to meet you!' },
      { from: 'Marie', content: 'Let\'s talk about your car\'s extended warranty.' },
      { from: 'Adam', content: 'Drinks tonight?' },
      { from: 'Eve', content: 'I just bought the tickets!' },
  ],

  readNextMessage() { return this.messages.shift() },
  hasMessages() { return this.messages.length > 0 },
}

// Print out all messages in the inbox
while (inbox.hasMessages()) {
  const message = inbox.readNextMessage()
  console.log(`New message from ${message.from}: ${message.content}`)
}
```

::: details Output
```
New message from John: Hi there, nice to meet you!
New message from Marie: Let's talk about your car's extended warranty.
New message from Adam: Drinks tonight?
New message from Eve: I just bought the tickets!
```
:::

## For loops

### Syntax

For loops are used to execute a block of code a specified number of times.

They usually look like the below:

```js
for (let i = 0; i < 100; i++) {
  // code block to be executed
}
```

## For ... of loops