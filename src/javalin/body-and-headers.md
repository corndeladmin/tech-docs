# Body and headers

## Endpoints with body

When we send a request, the headers are available in the backend as `ctx.header(String)`.

When we send a request with a JSON body, we can use `ctx.bodyAsClass(Some.class)` to parse the JSON into an object using a class.

::: code-group

```java{8-10,13-18} [server]
public class App {
  private Javalin app;

  public App() {
    app.post(
        "/users",
        ctx -> {
          var body = ctx.bodyAsClass(UserRequestBody.class);
          var newUser = UserRepository.create(body.username, body.verified);
          res.status(HttpStatus.CREATED).json(newUser);
        });
  }

  class UserRequestBody {
    public String username;
    public boolean verified;

    public UserRequestBody() {}
  }
}
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

Since the `ctx.bodyAsClass()` method uses the Jackson ObjectMapper under the hood, it needs a default constructor. It will then fill in the public fields that match betwwen the class and the JSON body.

::: tip

According to the
[HTTP standard](https://www.rfc-editor.org/rfc/rfc9110.html#name-terminology-and-core-concep),
`GET` requests cannot have a body, so we generally only use body in requests
with `POST`, `PUT` and `PATCH`.

:::
