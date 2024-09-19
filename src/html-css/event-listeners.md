# Event listeners

## Attaching an event listener

We can listen for events such as `'click'` or `'mouseenter'` and trigger
listener functions in response.

::: code-group

```js
const shareBtn = document.querySelector('#shareBtn')

function shareMovie() {
  window.alert('You shared me!')
}

shareBtn.addEventListener('click', shareMovie)
```

```html
<button id="share-btn" class="btn-icon">
  <span class="icon material-icons">share</span>
</button>
```

:::

## Using arrow functions

We can use arrow functions to reduce the verbosity of our code.

```js
shareBtn.addEventListener('mouseenter', () => {
  console.log('That tickles!')
})
```

## Common events

Here are some of the different events you can listen for in the DOM:

| Event Name         | Description                                                                                                                                           |
| ------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `click`            | Fires when a pointing device button (usually a mouse button) is clicked on an element.                                                                |
| `dblclick`         | Fires when a pointing device button is double-clicked on an element.                                                                                  |
| `mousedown`        | Fires when a pointing device button is pressed down on an element.                                                                                    |
| `mouseup`          | Fires when a pointing device button is released over an element.                                                                                      |
| `mouseover`        | Fires when a pointing device is moved onto an element.                                                                                                |
| `mouseout`         | Fires when a pointing device is moved off an element.                                                                                                 |
| `mousemove`        | Fires when a pointing device is moved while over an element.                                                                                          |
| `keydown`          | Fires when a key is pressed down on the keyboard.                                                                                                     |
| `keyup`            | Fires when a key is released on the keyboard.                                                                                                         |
| `keypress`         | Fires when a key is pressed down and then released on the keyboard (deprecated in favor of `keydown` and `keyup`).                                    |
| `submit`           | Fires when a form is submitted.                                                                                                                       |
| `change`           | Fires when the value of an `<input>`, `<textarea>`, or `<select>` element has been changed.                                                           |
| `focus`            | Fires when an element gains focus (e.g., when a user clicks or tabs into an element).                                                                 |
| `blur`             | Fires when an element loses focus.                                                                                                                    |
| `input`            | Fires when the value of an `<input>` or `<textarea>` element is changed, even without losing focus.                                                   |
| `resize`           | Fires when the document view (window) has been resized.                                                                                               |
| `scroll`           | Fires when the document view or an element is scrolled.                                                                                               |
| `load`             | Fires when the entire page (including images, scripts, etc.) has fully loaded.                                                                        |
| `DOMContentLoaded` | Fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. |
| `unload`           | Fires when the document or a child resource is being unloaded.                                                                                        |
| `drag`             | Fires continuously when an element is being dragged.                                                                                                  |
| `drop`             | Fires when a dragged element or text is dropped on a valid drop target.                                                                               |
| `contextmenu`      | Fires when the right mouse button is clicked (usually to open a context menu).                                                                        |
| `touchstart`       | Fires when a touch point is placed on the touch surface.                                                                                              |
| `touchmove`        | Fires when a touch point is moved along the touch surface.                                                                                            |
| `touchend`         | Fires when a touch point is removed from the touch surface.                                                                                           |
| `touchcancel`      | Fires when a touch event is interrupted, such as by an alert popping up.                                                                              |
