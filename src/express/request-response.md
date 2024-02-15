# Request and response

## URL params

We can use url params to send "arguments" to the server.

We might want to make a request to get a particular user by their `id`:

```bash
curl localhost:5000/api/users/4
```

This is how we handle it on the server side:

```js
app.get('/api/users/:id', async (req, res) => {
  const { id } = req.params
  const query = 'SELECT * FROM users WHERE id = (?)'
  const results = await db.raw(query, [id])
  res.json(results[0])
})
```

::: danger

Do _not_ be tempted to use template literals to build your query:

```js
const query = `SELECT * FROM users WHERE id = ${req.params.id}`
```

This opens you up to SQL injection attacks, where hackers interpolate malicious
SQL into your application:

```bash
curl "localhost:5000/api/users/1;%20DROP%20TABLE%20users;"
```

:::

## Query parameters

We can also send _query parameters_ as part of the url:

```bash
curl "localhost:5000/users?limit=5&page=2"
```

We obtain these on the server side from `req.query`.

```js
app.get('/api/users', async (req, res) => {
  let { limit = 10, page = 1 } = req.query
  const offset = limit * (page - 1)
  const query = `SELECT * FROM users LIMIT (?) OFFSET (?)`
  const results = await db.raw(query, [limit, offset])
  res.json(results)
})
```

## Request body

When sending a `POST`, `PUT` or `PATCH` request, the request might contain a
_body_ with some data in JSON format.

```bash
curl -X POST "localhost:5000/api/users" -H "Content-Type: application/json" -d '{"username": "DonaldDuck"}'
```

We can get the body as a javascript object from `req.body` on the server.

```js
app.post('/api/users', async (req, res) => {
  const { username, verified = 0 } = req.body
  const query = `INSERT INTO users (username, verified) VALUES ((?),(?))`
  await db.raw(query, [username, verified])
  res.status(201).json({ msg: 'User created.' })
})
```
