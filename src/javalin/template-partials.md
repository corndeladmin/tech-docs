# Template partials

## Configuring Thymeleaf

Before using fragments, we need to configure Thymeleaf.

```java
var resolver = new ClassLoaderTemplateResolver();
resolver.setPrefix("/templates/");
resolver.setSuffix(".html");
resolver.setTemplateMode("HTML");

var engine = new TemplateEngine();
engine.setTemplateResolver(resolver);
```

Now, we pass this `engine` object when we're registering Thymeleaf as a file
renderer:

```java
config.fileRenderer(new JavalinThymeleaf(engine));
```

Finally, we remove the `"/templates"` prefix from our handlers:

```java{3}
public class HomeController {
  public static void renderHome(Context ctx) {
    ctx.render("index.html");
  }
}
```

## Defining fragments

We can create reusable snippets of HTML and insert them into our templates. This
reduces code duplication.

```html
<!-- templates/fragments.html -->
<footer th:fragment="footer">
  <div>Copyright Bleeter Inc.</div>
</footer>
```

## Using fragments

We can use fragments throughout our templates:

```html{5}
<!-- index.html -->
<body>
  <h1>Welcome to Bleeter!</h1>

  <div th:replace="fragments :: footer"></div>
</body>
```

The entire div will be replaced with the `<footer>` fragment.

## Passing data

We can pass data into our fragments to make them more flexible.

```html
<!-- fragments.html -->
<header th:fragment="header(title)">
  <h1 th:text="${title}">Default</h1>
</header>
```

Then when we use them in the template, we pass an argument for title:

```html{3}
<!-- index.html -->
<body>
  <div th:replace="fragments :: header('Welcome to bleeter')"></div>

  <main>
    <!-- other content here -->
  </main>

  <div th:replace="fragments :: footer"></div>
</body>
```
