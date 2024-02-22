# Query params

<Vimeo id="915622814" />

## URL structure

If you've ever looked at the URL bar in your browser, you'll recognise query
params. They're the things separated by `&` and `?` after the url:

```txt
https://www.google.com/search?q=how+to+css&&sclient=gws-wiz
```

## Parsing query params

Express does a lot of the hard work for us. It parses the query params into an
object and attaches them to the `req` as `req.query`.

::: code-group

```js{2} [server]
app.get('/users', async (req, res) => {
  const users = await User.findAll(req.query.limit)
  res.json(users)
})
```

```bash{1} [client]
> GET "/users?limit=3 HTTP/1.1"
> Host: localhost:5000
> User-Agent: curl/7.81.0
> Accept: */*

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 136
< ETag: W/"88-4JxhISw0NhZK5Bpz0Tl1UP/kgq4"
< Date: Thu, 22 Feb 2024 16:42:33 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5

[
  {
    "id": 1,
    "username": "EluskM",
    "verified": 1
  },
  {
    "id": 2,
    "username": "BillGatekeeper",
    "verified": 1
  },
  {
    "id": 3,
    "username": "JeffWho",
    "verified": 0
  }
]
```

:::
