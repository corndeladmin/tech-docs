# URL params

## URL structure

To make parts of the url dynamic in Javalin, we can use curly braces like so:

```java {1}
app.get("/users/{x}/{y}/{z}", ctx -> {
  var x = ctx.pathParam("x"); 
  var y = ctx.pathParam("y"); 
  var z = ctx.pathParam("z"); 

  var hashMap = new HashMap<String, String>();

  hashMap.put("x", x);
  hashMap.put("y", y);
  hashMap.put("z", z);

  ctx.json(hashMap);
})
```

Now, a `GET` request to `/users/3/awesome/true` would respond with:

```
{
  "x": "3",
  "y": "awesome",
  "z": "true"
}
```

## Using URL params

A practical application of URL params is to create dynamic endpoints, where users of the API can request particular rows from a table.

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
