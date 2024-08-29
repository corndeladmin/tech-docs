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

In order to update all the clients, we need to keep track of their server side
sockets they have created.

Forunately, the `WebSocketServer` object keeps track of that for us in a
property called `clients`.

```js{6}
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })

server.on('connection', () => {
  console.log(server.clients) // lists all created sockets
})
```

## Forwarding messages

When a client sends a message to its socket, we need to parse the message, then
loop through and forward its content to every connected client.

```js
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })

server.on('connection', socket => {
  // when we receive a message
  // forward the message to all clients
  socket.on('message', message => {
    for (let client of server.clients) {
      client.send(message)
    }
  })
})
```

And that's it! Now all connected users will receive any message sent by any
other user.
