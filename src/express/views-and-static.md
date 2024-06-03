# Views with EJS

So far, we have used express to send JSON. But it can do much more than that.
Dynamic web applications often require the ability to generate HTML content
dynamically, based on the server-side data. EJS (Embedded JavaScript) templates
allow us to do just that in an Express application. In this section, we will
learn how to set up and use EJS as our templating engine to render dynamic
views.

## Adding a view engine

A view engine allows us to send this html to the user.

First, we install `ejs`.

```bash
npm install ejs
```

The, in `npm/app.js`, we register EJS as our view engine.

```js
// server/app.js
app.set('view engine', 'ejs')
```

## Creating views

Let's make a folder for our views, and create our first view.

```bash
mkdir views
touch views/index.ejs
```

A `.ejs` file is basically HTML with some added javascript to make it dynamic.
In `index.ejs`, let's add the following:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bleeter</title>
  </head>
  <body>
    <header>Bleeter</header>
    <main>
      <h1>Users</h1>
    </main>
    <footer>Copyright</footer>
  </body>
</html>
```

Now, in `app.js`, we'll add

```js
app.get('/', (req, res) => {
  res.render('index')
})
```

The `.render` method will look for `index.js` in the `views` folder and send it
to the browser.

## Including static files

If we would like to include some `css` without our view, it means sending an
additional "static" file. Fortunately, sending static files in express is quite
easy. We add this line to `app.js`

```js
app.use(express.static('public'))
```

Now, we can put our `style.css` in the `public` folder and add the following
line to the `<head>` of our `index.js`

```html
<link rel="stylesheet" ref="style.css" />
```

We have created our first web server!
