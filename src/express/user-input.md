# User input

<Vimeo id="936455345" />

## Creating a form

We create a view which displays a form to the user.

```js
<form action="/bleets" method="POST">

  <label for="userId">User ID</label>
  <input type="text" id="userId" name="userId">

  <label for="content">Content</label>
  <textarea name="content" id="content" cols="30" rows="10"></textarea>

  <button type="submit">Bleet it!</button>
</form>
```

::: info

The `name` attribute of the inputs determines the key once the form data is
parsed into a javascript object on the server. This form would result in an
object with keys of `userId` and `content`.

:::

## Rendering the form

We need to create a controller which renders the form for the user to complete.

```js
web.get('/bleets/new', (req, res) => {
  res.render('bleets/new', { title: 'Create a bleet' })
})
```

::: warning

This controller must be placed _above_ the `/bleets/:id` endpoint controller. If
not, then `/bleets/new` will match the `bleets/:id` pattern, and the string
`new` will be interpreted as the `id` of a bleet and passed to the wrong
controller!

:::

## Parsing form data

We must configure the app to properly parse form data into a javascript object
and make it available on the `req.body`.

```js [app.js]
app.use(express.urlencoded({ extended: true }))
```

::: warning

This must occur _before_ any of the web routes are attached to the `app`.

:::

## Handling the post request

The form submit a `POST` request to the `/bleets` endpoint. We must create a
controller for this:

```js
app.post('/bleets', async (req, res) => {
  const { content, userId } = req.body
  await Bleet.create(content, userId)
  res.redirect('/bleets')
})
```

The `res.redirect('/bleets')` sends to browser to the `/bleets` page on
successful submission.
