# Query params

## URL structure

If you've ever looked at the URL bar in your browser, you'll recognise query
params. They're the things separated by `&` and `?` after the url:

```txt
https://www.google.com/search?q=how+to+css&&sclient=gws-wiz
```

## Parsing query params

Javalin does a lot of the hard work for us. We can access the query parameters through the context object using the `queryParam()` method.

::: code-group

```java{2,3} [server]
app.get("/users", ctx -> { 
  var limit = Integer.parseInt(ctx.queryParam("limit"));
  var users = UserRepository.findAll(limit);
  ctx.json(users);
})
```

```bash{1} [client]
> GET "/users?limit=3 HTTP/1.1"
> Host: localhost:8080
> User-Agent: curl/7.81.0
> Accept: */*

< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< Content-Length: 136
< Date: Thu, 22 Feb 2024 16:42:33 GMT

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
