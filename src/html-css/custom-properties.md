# Custom properties

## Declaring custom properties

Custom properties in CSS allows us to create variables that we can re-use in our
applications.

This is especially useful when dealing with colour themes, for example.

```css
:root {
  --color-primary: #08d9d6;
  --color-secondary: #ff2e63;
}
```

We declare these properties in the `:root` pseudo-element to ensure that they
are available everywhere in our CSS. The `:root` element refers to the outermost
HTML element in the document, which is usually the `<html>` element.

## Using custom properties

Elsewhere in our CSS, we can make use of these custom properties with `var`.

```css
button {
  background-color: var(--color-primary);
}

header {
  border-bottom: solid 1px var(--color-secondary);
}
```

## Overriding custom properties

It is possible to override custom properties by redefining them in a more
specific CSS selector.

::: code-group

```css
:root {
  --header-height: 50px;
}

body.compact {
  --header-height: 25px;
}
```

```html
  </head>

  <body class="compact">
    <header>
      <span class="icon home">home</span>
      <span class="title">FrameRate</span>
      <span class="icon menu">menu</span>
    </header>
```

:::

If we put `<body class="compact">` in our html, the smaller header height will
take precedence. However, if we don't put `class="compact"` the larger header
height will apply.
