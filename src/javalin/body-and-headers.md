# Body and headers

<Vimeo id="1012076918" />

## Headers

When we send a request, the headers are available in the backend on
`ctx.header()`. For example, to look at the `Accept-Language` property in the
request's headers, we do

```java
ctx.header("Accept-Language"); // en-GB,en-US;q=0.9,en;q=0.8
```

## Body

When we send a request with a JSON body, we can use
`ctx.bodyAsClass(Some.class)` to parse the JSON into an object using a class.

::: info

The `.bodyAsClass` method uses Jackson under the hood, so everything we learned
in [working with json](/java/working-with-json) can be applied.

:::

## Converting from JSON

In order to represent the JSON from the body in Java, we could use a class, such
as

```java
class UserRequest {
  public String username;
  public boolean verified;

  public UserRequest(String username, boolean verified) {
    this.username = username;
    this.verified = verified;
  }
}
```

However, we can make this shorter by using a `record`

```java
record UserRequest(String username, Boolean verified) {}
```

This makes an immutable class with getters and setters defined for us
automatically.

## Creating the endpoint

We listen for `post` requests like this:

::: code-group

```java{8-10,13-18} [server]
app.post("/users", (ctx) -> {
  UserRequest body = ctx.bodyAsClass(UserRequest.class);
  User user = UserRepository.create(body.username(), body.verified());
  ctx.status(201); // created
  ctx.json(user);
});
```

```bash{3} [client]
curl -v -X POST http://localhost:8080/users \
  -H "Content-Type: application/json" \
  -d '{"username": "MinnieMouse", "verified": true}'

> POST /users HTTP/1.1
> Host: localhost:8080
> User-Agent: curl/7.81.0
> Accept: */*
> Content-Type: application/json
> Content-Length: 45

< HTTP/1.1 200 OK
< Content-Type: application/json; charset=utf-8
< Content-Length: 47
< Date: Thu, 22 Feb 2024 16:57:57 GMT

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
