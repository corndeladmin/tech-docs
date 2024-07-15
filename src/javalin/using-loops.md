# Using loops

<Vimeo id="936176206" />

## Passing an array

It is a very common scenario to pass an array of objects to our template.

```js
app.get('/bleets', async (req, res) => {
  const bleets = await Bleet.findAll() // bleets is an array
  res.render('bleets', { bleets })
})
```

This renders the `bleets.ejs` template with access to the array of `bleets` from
the database.

## Rendering lists

In our view, we can use EJS to render the list using a `for`/`of` loop.

```html
<ol>
  <% for (let bleet of bleets) { %>
  <li>
    <%= bleet.content.slice(0, 10) + '...' %>
    <a href="<%= `/bleets/${bleet.id}` %>">Read more</a>
  </li>
  <% } %>
</ol>
```

::: tip

It is not necessary to use `<ol>` or `<ul>` when rendering lists - you can use
this looping pattern to render any html you like.

:::

::: info

The `<% %>` tags interpolate javascript into the template without displaying
anything in the view. This is often used to start and end loops, or to do
conditional rendering such as

```html
<% if (condition) { %>
<p>Condition is true!</p>
<% } else { %>
<p>Condition is false!</p>
<% } %>
```

:::
