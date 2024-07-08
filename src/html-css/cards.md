# Cards

A _card_ is a common pattern in UI which allows us to display lists of complex
data to the user. Complex here doesn't mean difficult or complicated, just that
it might have several parts to it.

## HTML

We usually have a section at the top which either an image or a video, a section
in the middle with some text about the item, and a section at the bottom with
user actions.

```html
<article class="card">
  <div class="media">
    <img src="the/image/here.png" />
  </div>

  <div class="content">
    <div class="title"></div>
    <p class="description"></p>
  </div>

  <div class="actions">
    <button>Click here!</button>
  </div>
</article>
```

## CSS

It's a good idea to add some padding and border radius to soften the edges, and
changing the background colour helps hint at the boundaries of the card.

```css
.card {
  width: 100%;
  max-width: 300px;
  background-color: hsl(0, 0%, 90%);
  border-radius: 8px;
  padding: 16px;
}
```

Also, setting `width` and `max-width` means that the card will take up `100%` of
the available width on small screens, but won't grow too big on larger screens.

For the actions, we can make good use of `display: flex` to make sure the
buttons align perfectly.

```css
.actions {
  background-color: hsl(0, 0%, 80%);
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 8px;
  padding: 8px 16px;
}
```

## Example

Here's what the result might look like. This is just an indicative example.
There are lots of ways of creating cards, and different patterns and designs you
can try.

::: tip

Feel free to modify the HTML or CSS to get a feel for how it works.

:::

<Codepen
  title="Cards"
  user="shai11"
  id="vYqYpdP"
  height="1000"
/>
