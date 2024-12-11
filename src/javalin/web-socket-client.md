# Creating a web socket client

This is a front-end task, but it's important to complete the picture on working
with web sockets, so we'll demonstrate here how we send and receive messages on
the client.

::: code-group

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script type="module" src="script.js" defer></script>
    <title>Document</title>
  </head>

  <body>
    <h1>Simple chat</h1>

    <form id="form" class="form">
      <textarea
        name="content"
        id="content"
        placeholder="Write your message"
      ></textarea>
      <input type="submit" value="Send" />
    </form>

    <h2>Messages</h2>
    <ul id="chat"></ul>
  </body>
</html>
```

```js
document.addEventListener('DOMContentLoaded', main)

function main() {
  // make a client-side socket
  const socket = new WebSocket('ws://localhost:5001/websocket')

  // get a reference to the elemets we need
  const form = document.getElementById('form')
  const chat = document.getElementById('chat')

  // handle submit events
  form.addEventListener('submit', e => {
    // stop the page from reloading
    e.preventDefault()

    // get the message from the textarea
    const data = new FormData(form)

    // send it to the server
    socket.send(data.get('content'))

    // clear the form
    form.reset()
  })

  // handle new messages
  socket.onmessage = async message => {
    // create a new <li> element
    const li = document.createElement('li')

    // insert the text from the incoming message
    li.innerText = await message.data.text()

    // add the <li> to the chat area
    chat.appendChild(li)
  }
}
```

```css
form {
  width: 100%;
  max-width: 250px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

form > * {
  display: block;
  padding: 0.5rem;
}

li {
  margin-bottom: 1rem;
}
```

:::
