# Request and response

<Vimeo id="915624417" />

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

We can configure our app to send an receive JSON as part of the body. As a
bonus, this will also encode and parse between JSON and Javascript without need
of `JSON.parse()` and `JSON.stringify()`.

```js{2}
const app = express()
app.use(express.json())
```

Now we can send and receive json

::: code-group

```js [server]
app.get('/users', async (req, res) => {
  const users = await User.findAll()
  res.json(users)
})
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
