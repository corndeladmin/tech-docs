# URL params

<Vimeo id="1012076977" />

## URL structure

To make parts of the url dynamic in Javalin, we can use curly braces like so:

```java {1}
app.get("/users/{x}/{y}/{z}", ctx -> {
  var x = ctx.pathParam("x");
  var y = ctx.pathParam("y");
  var z = ctx.pathParam("z");

  System.out.println(x);
  System.out.println(y);
  System.out.println(z);
});
```

Now, a `GET` request to `/users/3/awesome/true` would make the server log:

```
3
awesome
true
```

::: warning

Note that these are all strings. We need to parse them to use them as their
intended data type, e.g.

```java
var z = Boolean.parseBoolean(ctx.pathParam("z"));
```

:::

## Using URL params

A practical application of URL params is to create dynamic endpoints, where
users of the API can request particular rows from a table.

::: code-group

```java{2-3} [server]
app.get("/users/{userId}", ctx -> {
  var id = Integer.parseInt(ctx.pathParam("userId"));
  var user = UserRepository.findById(id);
  ctx.json(user);
})
```

```bash{1} [client]
> GET /users/13 HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/8.5.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Thu, 18 Jul 2024 10:52:45 GMT
< Content-Type: application/json
< Content-Length: 212
<
{
  "id": 13,
  "username": "EdShearing",
  "verified": 1
}
```

:::

Note that we could respond with a `404 Not Found` in case there is no such user:

```java
if (user == null) {
  ctx.status(404);
  return;
}
```
