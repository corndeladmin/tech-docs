# Routing and Controllers

<Vimeo id="1012451404" />

## Creating controllers

As our application grows, we will need to organise our code. Do do this, we can
create controller classes.

The controller classes can accept the `ctx` object passed by Javalin.

```java
public class UserController {
  public static void getAllUsers(Context ctx) {
    var users = UserRepository.findAll();
    ctx.json(users);
  }
}
```

## Attaching controllers

We can attach the controllers to the Javalin app like this:

```java{11-13}
public class App {

  public static void main(String[] args) {
    var app = createApp();
    app.start(5000);
  }

  public static Javalin createApp() {
    var app = Javalin.create();

    app.get("/users", UserController::getAllUsers);
    app.get("/users/{id}", UserController::getUserById);
    app.post("/users", UserController::createUser);

    return app;
  }
}
```

## API Builder

We repeat the `/users` endpoint quite often. Perhaps a neater way to arrange
this is to use Javalin's `apiBuilder`:

```java
import static io.javalin.apibuilder.ApiBuilder.*;
```

Now we can nest routes.

```java
public static Javalin createApp() {
  var app = Javalin.create(config -> {

    config.router.apiBuilder(() -> {
      path("/users", () -> {
        get("", UserController::getAllUsers);
        get("/{id}", UserController::getUserById);
        post("", UserController::createUser);
      });
    });

  });

  return app;
}
```

It becomes a bit easier to refactor the URL structure if needed.
