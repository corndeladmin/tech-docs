# Drawer

The drawer pattern allows the user to open a menu which slides in from the
boundary of the screen. The familiar "burger menu icon" is often used to tell
users that they can open a drawer by clicking it.

It's very common to use this to hide the left-navigation panel on mobile devices
and allows users to show it by clicking the menu button.

## HTML

For the HTML, we have put the `.open` button in the header of the app, and the
`.close` button in the drawer itself.

```html
<div class="app">
  <header>
    <button class="icon open">
      <span class="material-icons">menu</span>
    </button>
  </header>

  <div class="drawer">
    <button class="icon close">
      <span class="material-icons">close</span>
    </button>
  </div>
</div>
```

## CSS

The drawer is initially hidden by sliding it to the left by an amount equal to
its own width. This is done by adding the `transform: translateX(-250px)`
property, essentially hiding it from view off the left side of the screen.

When the `active` class is added to the drawer, this property is over-ridden
with `0px` so that the drawer slides into view. The `transition: all 200ms`
property means that drawer takes 0.2s to slide into view.

```css
.drawer {
  position: absolute;
  left: 0;
  top: 0;
  padding: 8px;
  box-sizing: border-box;
  height: 500px;
  width: 250px;
  border-radius: 8px;
  background-color: hsl(0, 0%, 70%);
  transform: translateX(-250px); /* hide it */
  transition: all 200ms;
}

.drawer.active {
  transform: translateX(0px); /* show it! */
}
```

## JS

The JS is fairly simple:

- When the `.open` button is clicked, we add the `.active` class to the
  `.drawer` element.

- When the `.close` button is clicked, we remove the `.active` class from the
  `.drawer` element.

```js
document.addEventListener('DOMContentLoaded', () => {
  // get a reference to the elements
  const drawer = document.querySelector('.drawer')
  const openButton = document.querySelector('.open')
  const closeButton = document.querySelector('.close')

  // add `.active` when open is clicked
  openButton.addEventListener('click', () => {
    drawer.classList.add('active')
  })

  // remove `.active` when close is clicked
  closeButton.addEventListener('click', () => {
    drawer.classList.remove('active')
  })
})
```

## Example

Try pressing the _menu_ button in the mock-up below. You should see a drawer
slide out from the left. Then, press the _close_ button to dismiss it.

Try changing the timing of the transition to make it faster and slower. Notice
that, if you make it longer than about `250ms` it makes your app feel slow and
"laggy".

<Codepen user="shai11" id="abgbgBO" title="Drawer pattern" :height="700" />
