# Semantic HTML

<Vimeo id="915091225" />

## Generic elements

When writing HTML, there are two elements which get used with great frequency:
`<div>` and `<span>`. They are very useful, but they do sometimes get overused.

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

This HTML is hard to understand.

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
correct elements to choose.

:::

## Common elements

Here's a list of common semantic elements.

| Element       | Description                                                                                                                                                                      |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `<main>`      | Represents the main content of the document. It should be unique to the document and not contain content that is repeated across documents such as sidebars or navigation links. |
| `<header>`    | Represents introductory content or a set of navigational links.                                                                                                                  |
| `<footer>`    | Represents the footer of a document or section, typically containing authorship, copyright info.                                                                                 |
| `<nav>`       | Defines navigation links to help users navigate the document or related documents.                                                                                               |
| `<section>`   | Defines a section in a document, such as chapters, headers, footers, or any other sections.                                                                                      |
| `<article>`   | Represents self-contained content that could be distributed independently.                                                                                                       |
| `<aside>`     | Represents content that is only slightly related to the rest of the page content.                                                                                                |
| `<h1>`-`<h6>` | Heading elements, representing six levels of section headings. `<h1>` is the highest level.                                                                                      |
| `<p>`         | Represents a paragraph.                                                                                                                                                          |
