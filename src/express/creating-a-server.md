# Creating a server

## Project setup

To get our project set up, we will initialise a Node project and install some
dependencies:

```bash
npm init -y
npm install express dotenv
npm install -D nodemon
```

We will create two files, one where we configure the server application, and one
where we run it:

```bash
mkdir server
touch server/app.js
touch server/start.js
```

We also create the `.env` file and put global configuration constants in there:

```bash
touch .env
```

```.env
PORT=5000
```

## Configure the app

In `server/app.js`, we configure the server application.

```js
import express from 'express'

const app = express()

app.use(express.json())

app.get('/hello', (req, res) => {
  res.json({ msg: 'Welcome to the Bleeter server!' })
})

export default app
```

## Run the app

In `server/start.js` we import and run the configured application.

```js
import app from './app.js`

const PORT = process.env.PORT

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

We add two scripts to `package.json` - `start` to run the server in production,
and `dev` to run the server in development.

```json
"scripts": {
  "start": "node server/start.js",
  "dev": "nodemon server/start.js"
}
```

Now we can run the server with hot-reloading:

::: code-group

```bash
npm run dev
```

```console [output]
Server running on port 5000
```

:::

## Make a request

Now we can start our server with `npm run dev` and make a `GET` request to
`localhost:5000/hello` to see the server return a message.

::: code-group

```bash
curl localhost:5000/hello
```

```console [output]
{
  msg: 'Welcome to the Bleeter server!'
}
```

:::
