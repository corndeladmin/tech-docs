# User input

<Vimeo id="1015732200" />

## Creating a form

We create a view which displays a form to the user.

```html
<!-- bleets/new.html -->
<form action="/bleets" method="POST">
  <label for="userId">User ID</label>
  <input type="number" name="userId" id="userId" />

  <label for="content">Content</label>
  <textarea name="content" id="content"></textarea>

  <button type="submit">Bleet it!</button>
</form>
```

::: info

The `name` attribute of the inputs determines the key once the form data is
parsed on the server. This form would result in keys of `userId` and `content`.

:::

## Rendering the form

We need to create a controller which renders the form for the user to complete.

```java
// BleetController.java
public static void renderForm(Context ctx) {
  ctx.render("bleets/new.html");
}
```

## Handling the post request

The form submits a `POST` request to the `/bleets` endpoint. We must create a
handler for this:

```java
// BleetController.java
public static void handleForm(Context ctx) throws Exception {
  // get the userId
  int userId = ctx.formParamAsClass("userId", Integer.class).get();

  // get and validate the content
  String content = ctx.formParamAsClass("content", String.class)
      .check(data -> data.length() < 140, "Content must be less than 140 characters")
      .get();

  // create the bleet
  BleetRepository.create(userId, content);

  // redirect
  ctx.status(201);
  ctx.redirect("/bleets");
}
```

The `ctx.redirect('/bleets')` sends to browser to the `/bleets` page on
successful submission.
