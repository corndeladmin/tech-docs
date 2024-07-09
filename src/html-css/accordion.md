# Accordion

The accordion pattern gives users the ability to expand the contents of sections
which are relevant to them. It helps shorten the length of the pages and aids
exploration by showing only the headings of each section, meaning users can
still get a sense of what is available on the page.

## HTML

The HTML makes use of the `<details>` and `<summary>` elements, which give us
some expandable content by default.

```html
<div class="accordion">
  <details>
    <summary>Section 1</summary>
    <div class="content">
      <p>Content for section 1.</p>
    </div>
  </details>

  <details>
    <summary>Section 2</summary>
    <div class="content">
      <p>Content for section 2.</p>
    </div>
  </details>

  <details>
    <summary>Section 3</summary>
    <div class="content">
      <p>Content for section 3.</p>
    </div>
  </details>
</div>
```

However, to make this look more like an accordion, we need to add some CSS.

## CSS

The CSS focuses on making the `<details>` and `<summary>` look more like an
accordion, mostly by modifying the borders and background colour.

Note that the `:last-of-type` selector will select the last element within its
parent of that's type. We use this to remove the `border-bottom` of the final
`details` element so that it doesn't overlap with the border of the overall
accordion.

```css
.accordion {
  width: 100%;
  max-width: 600px;
  border: 1px solid hsl(0, 0%, 70%);
  border-radius: 8px;
  overflow: hidden;
}

details {
  border-bottom: 1px solid hsl(0, 0%, 70%);
}

details:last-of-type {
  border-bottom: none;
}

details summary {
  padding: 16px;
  cursor: pointer;
  background: hsl(0, 0%, 90%);
  list-style: none;
}

details summary:hover {
  background: hsl(0, 0%, 80%);
}

details[open] summary {
  background: hsl(0, 0%, 80%);
}

.content {
  padding: 8px 16px;
}
```

## Example

Here is what this looks like. Try removing the CSS with `:last-of-type` and look
carefully at the bottom border of the accordion. Also try deleting all the CSS
and seeing what the default appearance is for `<details>` and `<summary>`.

<Codepen user="shai11" :height="500" id="poXomwp" title="Accordion Pattern" />
