# Body and headers

<Vimeo id="915622944" />

## Endpoints with body

When we send a request, the headers are available in the backend as
`req.headers`.

When we send a request with a body, it will be parsed into the `req.body` for us
on the backend.

::: code-group

```js{1} [server]
app.post('/users', async (req, res) => {
  const user = await User.create(req.body.username, req.body.verified)
  res.json(user)
})
```

```bash{3} [client]
curl -v -X POST http://localhost:5000/users \
  -H "Content-Type: application/json" \
  -d '{"username": "MinnieMouse", "verified": true}'

> POST /users HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.81.0
> Accept: */*
> Content-Type: application/json
> Content-Length: 45

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 47
< ETag: W/"2f-nb/7y2Be3oCM0RJlX39MzZ6dYkE"
< Date: Thu, 22 Feb 2024 16:57:57 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

{
  "id": 21,
  "username": "MinnieMouse",
  "verified": 1
}

```

:::

::: tip

According to the
[HTTP standard](https://www.rfc-editor.org/rfc/rfc9110.html#name-terminology-and-core-concep),
`GET` requests cannot have a body, so we generally only use body in requests
with `POST`, `PUT` and `PATCH`.

:::
