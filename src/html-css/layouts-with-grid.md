# Layouts with grid

<Vimeo id="915145608" />

## CSS Grid

By adding `display: grid;` to a container, we can control the rows and columns
inside it. Each child element represents a row or a column.

::: code-group

```css
.container {
  display: grid;
}

.a {
  background-color: red;
}
.b {
  background-color: green;
}
.c {
  background-color: blue;
}
```

```html
<div class="container">
  <div class="a">Cell A</div>
  <div class="b">Cell B</div>
  <div class="c">Cell C</div>
</div>
```

:::

## Grid template

If we add `grid-template-rows: 1fr 2fr 1fr;`, then Cell A and Cell C will each
be given 25% of the height in the container, whereas Cell B will be given 50% of
the right.

```css
.container {
  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
}
```

If we modify this to `grid-template-rows: auto 1fr auto;` then Cell A and Cell C
will be given only enough height to contain their contents, and Cell B will be
given all remaining height in the container.

```css
.container {
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

::: tip

`grid-template-columns: 1fr 2fr 1fr;` would work similarly, but would divide up
the width of the container instead of the height.

:::

## Laying out a website

We can use grid to conveniently provide a layout for our website:

::: code-group

```css
body {
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr auto;
}
```

```html
<body>
  <header>Header content</header>
  <main>Main content</main>
  <footer>Footer content</footer>
</body>
```

:::
