# Semantic HTML

## Generic elements

When writing HTML, there are two elements which get used with great frequency:
`<div>` and `<span>`. They are very useful, but they do sometimes get overused.

For example, consider this:

```html
<div>
  <span>Reviews</span>
  <div>
    <div>
      <span>La La Land</span>
      <span>
        "La La Land" is a vibrant and emotional musical that celebrates the joy
        and pain of pursuing dreams in...
      </span>
    </div>
  </div>
</div>
```

The `<div>` and `<span>` elements don't convey any meaning about the content
they enclose. It means that screen readers (for partially sighted or blind
users) can't parse it propery, and search engines won't understand it either.

## Semantic elements

It is better to write _semantic HTML_, making full use of the different elements
available and conveying a rich amount of context along with the content.

```html
<main>
  <h1>Reviews</h1>
  <section>
    <article>
      <h2>La La Land</h2>
      <p>
        "La La Land" is a vibrant and emotional musical that celebrates the joy
        and pain of pursuing dreams in...
      </p>
    </article>
  </section>
</main>
```

::: tip

`<div>` and `<span>` definitely have their place - when you do need to enclose
some content but don't want to affect the semantics of the page, they are the
correct elements to choose. You will still use them plenty, but always take a
second to ask whether there is a dedicated element for what you're trying to do.

:::

## Common elements

Here's a list of the most common elements you'll see in a HTML document.

| Element       | Description                                                                                                                                                                     |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<main>`      | Represents the main content of the document. It should be unique to the document and not repeat content that is repeated across documents such as sidebars or navigation links. |
| `<header>`    | Represents introductory content or a set of navigational links.                                                                                                                 |
| `<footer>`    | Represents the footer of a document or section, typically containing authorship, copyright info.                                                                                |
| `<nav>`       | Defines navigation links to help users navigate the document or related documents.                                                                                              |
| `<section>`   | Defines a section in a document, such as chapters, headers, footers, or any other sections.                                                                                     |
| `<article>`   | Represents self-contained content that could be distributed independently.                                                                                                      |
| `<aside>`     | Represents content that is only slightly related to the rest of the page content.                                                                                               |
| `<h1>`-`<h6>` | Heading elements, representing six levels of section headings. `<h1>` is the highest level.                                                                                     |
| `<p>`         | Represents a paragraph.                                                                                                                                                         |
| `<ul>`        | Defines an unordered list.                                                                                                                                                      |
| `<ol>`        | Defines an ordered list.                                                                                                                                                        |
| `<li>`        | Represents an item in a list (`<ul>`, `<ol>`).                                                                                                                                  |
| `<a>`         | Defines a hyperlink to navigate to other pages or sections within the page.                                                                                                     |
| `<img>`       | Embeds an image in the document.                                                                                                                                                |
| `<table>`     | Represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.                                     |
| `<th>`        | Defines a header cell in a table.                                                                                                                                               |
| `<tr>`        | Defines a row in a table.                                                                                                                                                       |
| `<td>`        | Defines a cell in a table.                                                                                                                                                      |
| `<form>`      | Represents a form for user input.                                                                                                                                               |
| `<input>`     | Defines an input control.                                                                                                                                                       |
| `<button>`    | Represents a clickable button.                                                                                                                                                  |
