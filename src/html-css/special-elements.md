# Special elements

Some elements in HTML are special because they somehow connect to the world
outside the web page.

## Links

The `<a>` tag takes what is known as an _attribute_ called `href` (short for
hyper-reference). The `<a>` tag turns its content into a link which, when
clicked, will open the referenced url in the user's browser.

```html
<a href="https://www.themoviedb.org">Click me</a>
```

## Images

To add an image to a html document, you need the `<img>` element.

```html
<img
  src="images/landscape.jpg"
  alt="Beautiful landscape with mountains in the background"
/>
```

Notice that most HTML elements have opening and closing tags, but the `<img />`
element has no inner content and can be "self-closing".

The `alt` text is vital, as it allows users with screen-readers to engage with
the image. However, if your image is purely for style and contributes nothing to
the content (e.g. random artistic squiggles), you should include the alt
attribute but leave it empty `alt=""`, as this ensures that screen-readers skip
it and don't announce the presence of the image at all, which is a better
experience.

## Forms

Forms are complex elements with several child elements and attributes.

```html
<form action="/submit_review" method="POST">
  <p>
    <label for="movie">Name:</label>
    <input type="text" id="name" name="movie" required />
  </p>

  <p>
    <label for="review">Review:</label>
    <input type="textarea" id="review" name="review" required />
  </p>

  <input type="submit" value="Review" />
</form>
```

Adding labels for your form elements is not only important so users know what is
happening, it also means that users with reduced dexterity are able to cick the
label as well as the input box to activate the input.
