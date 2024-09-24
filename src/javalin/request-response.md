# Request and response

<Vimeo id="1012077106" />

## Request and response

There are several ways to send extra information as part of the request and
response. These include:

- Query params: parts of the url such as `?x=7&y=cool`

- URL params: dynamic parts of the endpoint, such as the `7` in `/users/7`

- Headers: Meta information about the request or response which is part of the
  HTTP standard

- Body: Complex, structured data which accompanies the request or response

## HTTP tools

Tools such as [cURL](https://curl.se/docs/), [Postman](https://www.postman.com/)
and the VS Code plugin [Thunderclient](https://www.thunderclient.com/) allows us
to construct more complex requests to test our applications. They simulate
client applications such as CLIs, mobile apps and websites which would be making
these requests in production.

## Sending and receiving JSON

Sending JSON is relatively simple if we're happy with exposing the public fields
and getters.

::: code-group

```java [server]
app.get("/users", ctx -> {
    var users = UserRepository.findAll();
    ctx.json(users);
});
```

```bash [client]
> GET /users HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.81.0
> Accept: */*

< HTTP/1.1 200 OK
< X-Powered-By: Express
< Content-Type: application/json; charset=utf-8
< Content-Length: 465
< ETag: W/"1d1-ANZR8XoyXChze/h4JDQ5/asCB28"
< Date: Thu, 22 Feb 2024 17:07:31 GMT
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
  },
  {
    "id": 4,
    "username": "OprahWindey",
    "verified": 1
  },
  {
    "id": 5,
    "username": "MarkZeeberg",
    "verified": 1
  },
  {
    "id": 6,
    "username": "LarryFlinger",
    "verified": 0
  },
  {
    "id": 7,
    "username": "CannyWest",
    "verified": 1
  },
  {
    "id": 8,
    "username": "TaylorSquid",
    "verified": 0
  },
  {
    "id": 9,
    "username": "ArianaVenti",
    "verified": 1
  },
  {
    "id": 10,
    "username": "KylieGenner",
    "verified": 0
  }
]
```

:::
