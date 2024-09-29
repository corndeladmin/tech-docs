# Schema validation

<Vimeo id="1012451215" />

## Validating params

We can use Javalin's built-in validation techniques to parse and validate
params.

```java
// UserController.java

int limit = ctx.queryParam("limit") != null // [!code --]
    ? Integer.parseInt(ctx.queryParam("limit")) // [!code --]
    : 10; // [!code --]

int offset = ctx.queryParam("offset") != null // [!code --]
    ? Integer.parseInt(ctx.queryParam("offset")) // [!code --]
    : 0; // [!code --]

int limit = ctx.queryParamAsClass("limit", Integer.class).getOrDefault(10); // [!code ++]
int offset = ctx.queryParamAsClass("offset", Integer.class).getOrDefault(0); // [!code ++]
```

This has a few benefits:

- it will automatically respond with a `400` if the param can't be parsed into
  an integer

- a reasonable error message will be generated automatically for the client.

## Validating a body

It is important to ensure that users of the API are sending the correct data.

We can validate the body of a HTTP request to make sure it adheres to the
correct schema.

```java{4-7}
// UserController.java

public static void createUser(Context ctx) throws Exception {
  UserRequest body = ctx.bodyValidator(UserRequest.class)
      .check(data -> data.username().length() > 2, "username must be at least 3 characters")
      .check(data -> data.username().length() < 20, "username must be less than 20 characters")
      .get();

  var user = UserRepository.create(body.username(), body.verified());

  ctx.status(201);
  ctx.json(user);
```
