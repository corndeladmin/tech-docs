# Selectors and functions

## Special selectors

CSS has lots of special selectors which can allow you to have a lot of control
over which elemnents your styles get applied to.

For example, `nth-last-child()` will select elements based on their position
from the end of their parent.

```css
header *:nth-last-child(4) {
  margin-left: auto;
}
```

::: info

The `*` in CSS is the universal selector, and matches all elements. In this
case, it is needed above because we want to target **all** children of the
`header` element, and select the fourth-last one.

:::

Here are a few more selectors which are useful and give you an idea of what is
possible:

| Selector  | Description                                                                                                                                                                                        | Example                                                                                                                                                                                                |
| :-------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|  `:is()`  | A selector that reduces the specificity of a group of selectors. It selects any element matching any selector in a list. Useful for grouping styles and simplifying complex selectors.             | `:is(h1, h2, h3) { margin-bottom: 1rem; }` — Applies a bottom margin to all `h1`, `h2`, and `h3` elements.                                                                                             |
| `:has()`  | A relational pseudo-class that matches an element if it contains at least one element that matches a selector. Useful for applying styles to a parent element based on the presence of a child.    | `div:has(> img) { border: 1px solid black; }` — Adds a border to any `div` that has a direct child `img` element.                                                                                      |
| `:hover`  | Selects elements when the user hovers over them with a mouse. Commonly used for creating interactive and visual effects like buttons that change color or animations on hover.                     | `button:hover { background-color: blue; }` — Changes the background color of a button to blue when it is hovered over.                                                                                 |
| `:not()`  | Selects every element that does **not** match the specified selector. Useful for excluding certain elements from a style rule without adding extra classes or IDs.                                 | `button:not(.primary) { background-color: gray; }` — Applies a gray background color to all buttons except those with the class `.primary`.                                                            |
| `:target` | Selects an element that is the target of a URL fragment. Useful for styling elements when they are linked to via an anchor link, such as highlighting a section or a modal when it becomes active. | `#section1:target { background-color: yellow; }` — Changes the background color to yellow for an element with the ID `section1` when it is the target of a URL fragment, e.g. `site.com/blog#section1` |

You can see the
[full list at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_selectors).

## Special functions

CSS contains several functions which can calculate values for us dynamically.

For example, the `clamp(min, x, max)` function will return `x` only if
`min < x < max`. If `x < min` it returns `min` and if `x > max` it returns max.
So `x` is allowed to vary but only if it sticks within the specified range.

```css
h1 {
  font-size: clamp(2rem, 4vw, 3rem);
}
```

This example sets the font-size of `<h1>` to 4% of the viewport width (i.e. the
device width). However, it won't go any smaller than `2rem` or any bigger than
`3rem`. This creates a fluid resizing experience with sensible minimum and
maximum sizes.

Here are a few more functions:

|    Function    | Description                                                                                                                                                               | Example                                                                                             |
| :------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | :-------------------------------------------------------------------------------------------------- |
|    `calc()`    | A function that allows mathematical calculations with CSS property values. It can combine different units, such as percentages and pixels, to dynamically compute styles. | `width: calc(100% - 50px);` — Sets the width to be the full width of the parent minus 50 pixels.    |
|   `invert()`   | A function that inverts the colors of an element. It's typically used with the `filter` property to create visual effects, such as creating a negative image.             | `filter: invert(100%);` — Inverts all colors of the element, turning white to black and vice versa. |
| `translateX()` | A function that moves an element along the X-axis. It is often used with the `transform` property to shift an element left or right.                                      | `transform: translateX(20px);` — Moves the element 20 pixels to the right along the X-axis.         |
|    `blur()`    | A function that applies a Gaussian blur to an element. It is used with the `filter` property to create a blurred effect, often for backgrounds or images.                 | `filter: blur(5px);` — Applies a 5-pixel blur effect to the element, making it look out of focus.   |

The full list is
[available at MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions).
