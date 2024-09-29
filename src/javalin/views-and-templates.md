# Views and templates

<Vimeo id="1" />

## Adding a template engine

To use the Thymeleaf templating engine in Javalin, we add two dependencies:

```xml
<dependency>
  <groupId>io.javalin</groupId>
  <artifactId>javalin-rendering</artifactId>
  <version>6.3.0</version>
</dependency>

<dependency>
  <groupId>org.thymeleaf</groupId>
  <artifactId>thymeleaf</artifactId>
  <version>3.1.2.RELEASE</version>
</dependency>
```

Then, we configure the Javalin app to use Thymeleaf:

```java{5-6}
var app = Javalin.create(config -> {
  // set up static files
  config.staticFiles.add("/public", Location.CLASSPATH);

  // set up the templating engine
  config.fileRenderer(new JavalinThymeleaf());
}
```

## Creating an HTML template with Thymeleaf

To create our HTML templates, we add them to the `resources/templates`
directory. It might look something like this:

```console
src/main/resources/templates/
├── bleets
│   ├── new.html
│   ├── index.html
│   └── single.html
├── index.html
└── users
    ├── index.html
    ├── signup.html
    └── single.html
```

## Adding an endpoint

To serve one of these pages, we add a `GET` endpoint to our app and use the
`.render()` method.

```java
app.get("/", ctx -> {
  ctx.render("/templates/index.html");
})
```

## Using controllers

As with our API, we could extract this handler into a controller.

::: code-group

```java [HomeController.java]
public class HomeController {
  public static void renderHome(Context ctx) {
    ctx.render("/templates/index.html");
  }
}
```

```java [App.java]
app.get("/", HomeController::renderHome);
```

## Inserting data

To insert data into a template, we need to provide a `Map` to the `.render()`
method.

```java
ctx.render("/templates/index.html", Map.of("x", 5, "y", 7));
```

Then we can use Thymeleaf in our `index.html` to interpolate the data.

```html
<div>
  <p th:text="${x}"></p>
  <p th:text="${y}"></p>
  <p th:text="${x + y}"></p>
</div>
```
