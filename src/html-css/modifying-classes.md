# Modifying classes

## Adding and removing classes

Once we have a reference to an element, we can add and remove classes.

::: code-group

```js
const showBtn = document.querySelector('#show-btn')
const hideBtn = document.querySelector('#hide-btn')
const summary = document.querySelector('.movie_summary')

showBtn.addEventListener('click', () => {
  summary.classList.remove('hidden')
})

hideBtn.addEventListener('click', () => {
  summary.classList.add('hidden')
})
```

```html
<button id="show-btn" class="btn-icon">
  <span class="material-icons">expand_more</span>
</button>

<button id="hide-btn" class="btn-icon">
  <span class="material-icons">expand_less</span>
</button>

<div class="movie_summary hidden">
  A taxi driver and a mysterious woman team up to find four stones and save
  Earth from an ancient evil.
</div>
```

```css
.hidden {
  display: none;
}
```

:::

## Toggling classes

If we just need to add a tag and then remove it again, we can use `.toggle`
instead of combining `.add` and `.remove`.

::: code-group

```js
const moreBtn = document.querySelector('#more-btn')
const summary = document.querySelector('.movie_summary')

moreBtn.addEventListener('click', () => {
  summary.classList.toggle('hidden')
})
```

```html
<button id="more-btn" class="btn-icon">
  <span class="material-icons">unfold_more</span>
</button>

<div class="movie_summary">
  A taxi driver and a mysterious woman team up to find four stones and save
  Earth from an ancient evil.
</div>
```

```css
.hidden {
  display: none;
}
```

:::
