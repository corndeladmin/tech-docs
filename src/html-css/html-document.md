# Setting up a document

<Vimeo id="915091133" />

## Boilerplate

A standard boilerplate can be inserted into your html documents by typing
`html:5` in VS Code.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- Meta info goes here -->
  </head>
  <body>
    <!-- Content goes here -->
  </body>
</html>
```

## The `<head>`

The `<head>` elements contains information _about_ the page.

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
</head>
```

## The `<body>`

The body contains visible _elements_.

Elements enclose their content with `<opening>` and `</closing>` tags. Elements
can contain other elements.

```html
<body>
  <h1>FrameRate</h1>

  <h2>Reviews</h2>

  <p>The Fifth Element is the greatest sci-fi movie ever made.</p>
</body>
```
