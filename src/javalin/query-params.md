# Query params

<Vimeo id="1012077041" />

## URL structure

If you've ever looked at the URL bar in your browser, you'll recognise query
params. They're the things separated by `&` and `?` after the url:

```txt
https://www.google.com/search?q=how+to+css&&sclient=gws-wiz
```

## Parsing query params

Javalin does a lot of the hard work for us. We can access the query parameters
through the context object using the `queryParam()` method.

::: code-group

```java{2,3} [server]
app.get("/users", ctx -> {
  var limit = Integer.parseInt(ctx.queryParam("limit"));
  var offset = Integer.parseInt(ctx.queryParam("offset"));
  var users = UserRepository.findAll(limit, offset);
  ctx.json(users);
})
```

```bash{1} [client]
> GET /users?limit=3&offset=5 HTTP/1.1
> Host: localhost:5000
> User-Agent: curl/7.81.0
> Accept: */*
>
* Mark bundle as not supporting multiuse
< HTTP/1.1 200 OK
< Date: Sun, 22 Sep 2024 23:54:15 GMT
< Content-Type: application/json
< Content-Length: 152
<

[
  {
    "id": 6,
    "username": "LarryFlinger",
    "verified": false
  },
  {
    "id": 7,
    "username": "CannyWest",
    "verified": true
  },
  {
    "id": 8,
    "username": "TaylorSquid",
    "verified": false
  }
]
```

:::

Note that we needed to refactor the `UserRepository.findAll()` method to make
this work.

::: details

```java
public static List<User> findAll(int limit, int offset) throws Exception {
  var query = "SELECT * FROM users LIMIT ? OFFSET ?";

  try (var connection = DB.getConnection();
      var statement = connection.prepareStatement(query);) {

    statement.setInt(1, limit);
    statement.setInt(2, offset);

    try (var resultSet = statement.executeQuery();) {
      var users = new ArrayList<User>();

      while (resultSet.next()) {
        var id = resultSet.getInt("id");
        var username = resultSet.getString("username");
        var verified = resultSet.getBoolean("verified");
        users.add(new User(id, username, verified));
      }

      return users;
    }
  }
}
```

:::

## Missing query params

If a query param isn't given, the `ctx.queryParam()` method will return null. We
can use this to provide a default value if needed.

```java
int limit = ctx.queryParam("limit") != null
    ? Integer.parseInt(ctx.queryParam("limit"))
    : 10;

int offset = ctx.queryParam("offset") != null
    ? Integer.parseInt(ctx.queryParam("offset"))
    : 0;
```

## Query param validation

We can respond with a `400 Bad Request` in case the given query params are not
valid.

```java
if (limit < 0 || offset < 0) {
  ctx.status(400);
  return;
}
```
