# Web socket servers

A web socket server enables a live, real-time connection between the client
(e.g. web browser) and server.

Most importantly, this is a two-way connection, so the server can send messages
to the client without the client needing to make a GET request.

::: info

Although web sockets aren't specific to Express, this part of the docs focuses
heavily on servers, so we felt these notes belonged here.

:::

## Creating a web socket server

To create a web socket server, we first install the `ws` library:

```bash
npm install ws
```

Then, in `app.js` we import and use the `WebSocketServer` class from `ws`.

```js
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })
```

## Listening for connections

It is very simple to listen for new connections.

```js{5-7}
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })

server.on('connection', (socket) => {
  // do what we want with the socket
})
```

When the `'connection'` event is emitted, we are passed a web socket, which we
can call whatever we want (here, we used `socket`).

## Listening for socket events

Now we have a `socket`, we can handle new messages which arrive from the client.

```js{6-7}
import { WebSocketServer } from 'ws'

const server = new WebSocketServer({ port: 5001 })

server.on('connection', socket => {
  socket.on('message', handleMessage)
  socket.on('close', cleanUp)
})
```

## Sending a message back

At any time we choose, we can send a message back to the client simply using the
`.send` method:

```js
socket.send('Hello from the server!')
```

The client will immediately have access to the message, provided it hasn't
closed the connection.
