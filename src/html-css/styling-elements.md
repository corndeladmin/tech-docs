# Stlying elements and classes

<Vimeo id="915145501" />

## Linking to the CSS

When you create a `.css` file, we need to tell the `.html` file to import it in
order for the styles to be applied.

```html{6}
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>FrameRate</title>
  </head>
  <body>
  </body>
</html>
```

## Styling elements

This CSS would turn _all_ `<h2>` elements green:

```css
h2 {
  color: green;
}
```

## Styling classes

We target classes in CSS using a `.` dot. All HTML elements with
`class="special"` will be have a red background.

```css
.special {
  background-color: red;
}
```

## Specificity

We can be more specific by building up more complex selectors. In this example,
only elements with `class="title"` and which are children of a `header` element
will have the font-size applied:

```css
header .title {
  font-size: 20px;
}
```

::: tip

Elements with `class="title"` which are not children of a header element will
not be affected.

:::
