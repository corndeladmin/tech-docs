# URL params

<Vimeo id="915622873" />

## URL structure

To make parts of the url dynamic in express, we precede them with a colon. They
will be parse into `req.params` for us by express.

```js
app.get('/users/:x/:y/:z', (req, res) => {
  console.log(req.params)
})
```

Now, a `GET` request to `/users/3/awesome/true` would log

```console
{
  x: '3',
  y: 'awesome',
  z: 'true'
}
```

to the console.

## Using URL params

A practical application of URL params is to create dynamic endpoints, where
users of the API can request particular rows from a table.

::: code-group

```js{2} [server]
app.get('/users/:userId', async (req, res) => {
  const user = await User.findById(req.params.userId)
  res.json(user)
})
```

```bash{1} [client]
> GET /users/13 HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.81.0
> Accept: */*

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 46
< ETag: W/"2e-kXyTSzYpI5ic6GsVpLyJPBxDD0E"
< Date: Thu, 22 Feb 2024 16:50:22 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{
  "id": 13,
  "username": "EdShearing",
  "verified": 1
}
```

:::
