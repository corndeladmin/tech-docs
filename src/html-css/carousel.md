# Carousel

The carousel pattern allows users to scroll horizontally between items in a
list. It is useful if you have several lists you want to display on a page and
don't want to overwhelm the user by showing all the items at once.

## HTML

The HTML looks quite natural.

- There is a `carousel-container` which determines the overall width and height
  of the viewable area, and hides the additional items.

- The `carousel` element creates the "viewport" through which we can see one
  item and hides the additional items.

- The `controls` element creates the buttons which the user can press to view
  additional items.

```html
<div class="carousel-container">
  <div class="carousel">
    <div class="carousel-item">Item 1</div>
    <div class="carousel-item">Item 2</div>
    <div class="carousel-item">Item 3</div>
  </div>
</div>

<div class="controls">
  <button class="prev">Previous</button>
  <button class="next">Next</button>
</div>
```

## CSS

The `carousel-container` ensures that the carousel doesn't become too wide:

```css
.carousel-container {
  width: 100%;
  max-width: 300px;
}
```

The `carousel` class creates a "viewport" through which the items can be seen:

- `display: flex` puts the items into a horizontal row.
- `overflow-x: hidden` makes sure that items outside the viewport can't be seen.
- `scroll-snap-type: x-mandatory` makes it so that scrolling horizontally will
  have a "snapping" behaviour.

```css
.carousel {
  display: flex;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}
```

The `carousel-items` can be viewed through the `carousel` element:

- `width: 100%` means that the items fill the whole viewport, but you could set
  this to, for example, `80%` if you want to see a small portion of the items to
  the left and right.

- `scroll-snap-align: center` ensures that, when the `carousel` element snaps on
  horizontal scroll, the items will be centred.

## JS

We need a bit of JavaScript to make this one work:

```js
document.addEventListener('DOMContentLoaded', () => {
  // get references to the elements we need to work with
  const items = document.querySelectorAll('.carousel-item')
  const prevButton = document.querySelector('.prev')
  const nextButton = document.querySelector('.next')

  // the current item in the viewport
  let currentIndex = 0

  // if we are at the beginning, disable the "left" button
  // if we are at the end, disable the "right" button
  const updateButtons = () => {
    prevButton.disabled = currentIndex === 0
    nextButton.disabled = currentIndex === items.length - 1
  }

  // scroll the item into view
  const scrollToIndex = index => {
    items[index].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    })
    currentIndex = index
    updateButtons()
  }

  // listen for click events on the buttons
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1)
    }
  })

  nextButton.addEventListener('click', () => {
    if (currentIndex < items.length - 1) {
      scrollToIndex(currentIndex + 1)
    }
  })

  updateButtons()
})
```

## Example

Here's a working example. Try changing the width of the `carousel-item` in the
CSS to show a small portion of the items to the left and right.

::: warning

To keep this simple, we haven't allowed horizontal scrolling and users must use
the buttons.

In a real app, it's a good idea to show a horizontal scrollbar and allow users
to swipe/scroll without using the buttons. This means the horizontal scroll
needs to be kept in sync with the `currentIndex` and adds some complexity to the
JS. It's not a big problem, but we wanted to keep this demo simple.

:::

<Codepen user="shai11" id="abgbxzW" title="Carousel Pattern" :height="700" />
