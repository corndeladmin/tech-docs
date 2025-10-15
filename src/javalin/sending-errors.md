# Sending errors

<Vimeo id="1012451305" />

## Error codes

When a client makes an HTTP request to the server, the server usually responds
with a status code.

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

## Javalin Exceptions

Javalin has some useful built in exceptions which make it easier to respond to
the client when something goes wrong.

This will respond with a `404`:

```java
if (user == null) {
  throw new NotFoundResponse("User not found");
}
```

This will respond with a `400`:

```java
if (limit < 0 || offset < 0) {
  throw new BadRequestResponse("Limit and offset must be greater than 0");
}
```

Here are some useful built-in exceptions:

|             Name              | Description                                                                                |
| :---------------------------: | ------------------------------------------------------------------------------------------ |
|     `BadRequestResponse`      | Returns a 400 Bad Request response with the default title Bad request.                     |
|    `UnauthorizedResponse`     | Returns a 401 Unauthorized response with the default title Unauthorized.                   |
|      `ForbiddenResponse`      | Returns a 403 Forbidden response with the default title Forbidden.                         |
|      `NotFoundResponse`       | Returns a 404 Not Found response with the default title Not found.                         |
| `InternalServerErrorResponse` | Returns a 500 Internal Server Error response with the default title Internal server error. |

## Fallback exception handling

If an exception is thrown which Javalin does not know how to handle, it will be
passed to a global exception handler which we can customise:

```java
app.exception(Exception.class, (e, ctx) -> {
  ctx.status(500);
  ctx.result("An unkown error occurred.");
});
```
