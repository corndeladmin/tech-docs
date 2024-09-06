# Manipulating elements

## Selecting elements

We can get a reference to an element on a web page using
`document.querySelector`.

::: code-group

```js
// selects the <button>
const likeBtn = document.querySelector('#like-btn')

// selects the child <span>
const likeIcon = document.querySelector('#like-btn .material-icons')
```

```html
<button id="like-btn" class="btn-icon">
  <span class="material-icons">favorite_border</span>
</button>
```

:::

::: tip

The string you pass to `document.querySelector()` is actually the same as a CSS
selector, so you can use your knowledge of CSS to select the element you need.

:::

::: tip

`document.querySelector()` selects the **first** element that matches the
selector. If you would like to get a list of all elements which match the
selector, use `document.querySelectorAll()`.

:::

## Reading the content

We can read the text contained inside an element with `.innerText`.

::: code-group

```js
const title = document.querySelector('.movie_title')
window.alert(title.innerText) // The Fifth Element
```

```html
<h2 class="movie_title">The Fifth Element</h2>
```

:::

## Changing the content

We can actually change the content simply by setting the `innerText` to a new
value.

::: code-group

```js
const title = document.querySelector('.movie_title')
title.innerText = 'Greatest movie ever'
```

```html
<h2 class="movie_title">The Fifth Element</h2>
```

:::

The `<h2>` in the HTML will now equal
`<h2 class="movie_title">Greatest movie ever</h2>`.
