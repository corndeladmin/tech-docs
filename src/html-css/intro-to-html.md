# HTML

Hypertext markup language - it's one heck of a name! HTML allows us to create
the structure of our page - it doesn't care too much what the page looks like,
but it creates a heirarchy of content and labels parts of the page with their
purpose.

## A HTML Document

The visible part of a html document might look like this:

```html
<body>

  <h1>Reviews<h1>

  <h2>The Fifth Element</h2>

  <p>
    Directed by Luc Besson, The Fifth Element is simply one of the greatest
    sci-fi movies ever made. More information is available on
    <a href="https://www.themoviedb.org/movie/18-the-fifth-element">The
    Movie Database</a>.
  </p>

</body>
```

Even without knowing any HTML, you could probably guess what is going on here.
The `<h1>` and `<h2>` elements are headers, the `p` element is a paragraph, and
the `<a>` element is a link (the `a` stands for _anchor_).

Everything is wrapped in a `<body>` tag, which tells the web browser to actually
display these things on the page.

## The `<head>` tag

The example above only included the `<body>` part of the page, and it was
missing the `<head>`. This is a crucial part of the document that isn't
displayed in the browser, but it contains some instructions for the browser on
how to display things, some meta information about the page, and more.

Here's what the example would look like with everything included.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>FrameRate</title>
  </head>
  <body>
    <h1>Reviews<h1>

    <h2>The Fifth Element</h2>

    <p>
      Directed by Luc Besson, The Fifth Element is simply one of the greatest
      sci-fi movies ever made. More information is available on
      <a href="https://www.themoviedb.org/movie/18-the-fifth-element">The
      Movie Database</a>.
    </p>
  </body>
</html>
```

This is a complete document which can be understood and displayed by the
browser. In the examples in this guide, we might occasionally leave out the
`<head>` and other boilerplate, but in order to make the examples work locally,
you should include it.
