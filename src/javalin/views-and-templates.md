# Views and templates

<Vimeo id="936026196" />

## Adding a template engine

First, we install `ejs` in our project

```bash
npm install ejs
```

Then, we configure our app to render `.ejs` files found in the `views` folder to
`.html` before sending them to the browser.

```js
app.set('view engine', 'ejs')
```

## Adding an endpoint

We configure endpoints to determine which URLs serve which views.

```js
app.get('/', async (req, res) => {
  const bleet = await Bleet.findById(3)

  res.render('index', {
    bleet
  })
})
```

Notice we are using `res.render` rather than `res.send` or `res.json`.

## Creating an EJS file

Finally, in the `views` directory, we create our `index.ejs`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bleeter</title>
  </head>

  <body>
    <h1>Welcome to Bleeter!</h1>
    <h2>Read some bleets...</h2>
    <p><%= bleet.content %></p>
  </body>
</html>
```
