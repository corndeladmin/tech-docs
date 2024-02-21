# Styling elements and classes

## Styling elements

In CSS, we first specify which elements we want to apply a style to, and then we
pass a list of key-value pairs defining the style we want.

For example, we can change the style of _all_ `<h2>` elements like this:

```css
h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  color: #2e008b;
}
```

## Styling classes

Sometimes, you want to target specific elements, not every element! To do this,
we can add a class to those elements in the html, and target them using a dot
`.` followed by the class name in the css:

::: code-group

```html
<div class="my-class">Movie 1</div>

<div>Movie 2</div>

<div class="my-class">Movie 3</div>
```

```css
/* This will affect all boxes */
div {
  height: 100px;
  width: 100px;
  border: solid 1px black;
  margin: 1rem;
}

/* This will only affect boxes with class="my-class" */
.my-class {
  background-color: red;
}
```

:::

## Specificity

You can write a chain of selectors to specifically target certain patterns and
exclude others:

::: code-group

```html
<div class="my-class">Movie 1</div>

<div>Movie 2</div>

<p>
  <div class="my-class">Movie 3</div>
</p>
```

```css
div {
  height: 100px;
  width: 100px;
  border: solid 1px black;
  margin: 1rem;
}

/* Only members of "my-class" inside a <p> element will get this: */
p .my-class {
  background-color: red;
}
```

:::
