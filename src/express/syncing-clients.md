# Syncing clients

Now that we can make a web socket server, how do we send messages between
clients?

In this guide, we will make a simple application in which a connected client
sends a message, and all other clients will receive the message.

## Setting up the server

As a quick reminder, let's see again the basic server set up:

```js
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })

server.on('connection', socket => {
  // do what we want with the socket
})
```

## Tracking sockets

In order to update all clients, we need to keep a reference to all sockets that
have been created.

```js{8-9,11-15}
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })

let sockets = []

server.on('connection', socket => {
  // keep track of new sockets
  sockets.push(socket)

  // if the client disconnects
  // remove the client's socket from the list
  socket.on('disconnect', () => {
    sockets = sockets.filter(s => s !== socket)
  })
})
```

::: info

In a production system, we'd choose a more robust way of keeping track of
sockets, but this will do for now.

:::

## Forwarding messages

When a client sends a message to its socket, we need to parse the message, then
loop through and forward its content to every connected client.

```js{14-20}
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })

let sockets = []

server.on('connection', socket => {
  sockets.push(socket)

  socket.on('disconnect', () => {
    sockets = sockets.filter(s => s !== socket)
  })

  // when we receive a message
  // forward the message to all clients
  socket.on('message', message => {
    for (let socket of sockets) {
      socket.send(message)
    }
  })
})
```

And that's it! Now all connected users will receive any message sent by any
other user.
