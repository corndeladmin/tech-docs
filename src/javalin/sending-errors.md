# Sending errors

## Error codes

When a client makes an HTTP request to the server, the server usually responds with a status code.

Here are some of the more common status codes.

| Code | Status                | Meaning                                                                          |
| :--: | :-------------------- | :------------------------------------------------------------------------------- |
| 200  | OK                    | The operation has succeeded                                                      |
| 201  | Created               | An entity has been created (e.g. rows inserted into the database)                |
| 204  | No Content            | The operation has succeeded, and the client doesn't need to do anything about it |
| 400  | Bad Request           | The data sent by the client is not valid                                         |
| 401  | Unauthorized          | In order to access this endpoint, you need to send credentials                   |
| 403  | Forbidden             | The credentials you send are not correct for this endpoint                       |
| 404  | Not Found             | This resource is not found                                                       |
| 500  | Internal Server Error | Something went wrong and the server will not explain why                         |

Detailed information on all status codes can be found on
[MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status).

In particular, we are interested in the error codes, (`400`-`599`).

## Error Responses

Javalin includes some `HttpResponseException`s that we can use to trigger error responses.

```java
public class HomeController {
  public static void post() throws HttpResponseException {
    throw new ForbiddenResponse();
  }
}

public class App {
  private Javalin app;

  public App() {
    app = Javalin.create();
    app.post("/", HomeController::post);
  }
}
```

::: tip

A list of available error responses are available on [Javalin's documentation](https://javalin.io/documentation#default-responses). They are all named consistently in the form `statusName + "Response"`.

:::

## Custom exceptions

## Throwing errors

In our models, we can throw errors that arise from handling data, which is where most errors occur.

```java
public class UserRepository {
  public static User findById(int id) throws HttpResponseException {
    if (id < 0) {
      throw new BadRequestResponse("ID is invalid");
    }

    var query = "SELECT id, username, firstName, lastName, email, avatar FROM users WHERE id = ?";

    try (var con = DB.getConnection();
        var stmt = con.prepareStatement(query)) {
      stmt.setInt(1, id);
      try (var rs = stmt.executeQuery()) {
        if (!rs.next()) {
          throw new NotFoundResponse("");
        }
        var username = rs.getString("username");
        var email = rs.getString("email");
        var verified = rs.getBoolean("avatar");

        return new User(id, username, email, verified);
      }
    }
  }
}
```

## Catching errors

We can catch the error in our controller and decide what to do with it. In this case, we pass the error to an error handler.

```java
public class App {
  private Javalin app;

  public App() {
    app = Javalin.create();
    app.get("/user/{userId}", ctx -> {});
  }
}
```

## Handling errors

We can send the error code and a useful message to the client by attaching an
error handler to the `app`.

::: warning

We should ensure the message doesn't expose our server's internal workings too
much, as this information could be used by hackers. Better not to send the whole
error object, but rather take full control of the information which is sent to
the client.

:::

```js
app.use((err, req, res, next) => {
  console.error(err)
  if (err instanceof AppError) {
    res.status(err.code).json({ error: err.message })
  } else {
    res.status(500).json({ error: 'Something went wrong.' })
  }
})
```

::: tip

Make sure that this `.use()` is the last method called on `app` before
`.listen()`. It must accept all 4 parameters `(err, req, res, next)` as this is
how express infers that the function is an error handler.

:::
