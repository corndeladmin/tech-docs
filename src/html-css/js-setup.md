# Setting up

## Creating JS files

Create a file named `script.js` (or any name you want) and place it next to
`index.html`.

```
.
├── index.html
├── script.js
└── style.css

0 directories, 3 files
```

::: info

If you are server-side rendering, you should put the `.js` files in your
`public` directory alongside your `.css` and other assets.

:::

## Loading JS files

Add some content to `script.js` and then import it into `index.html`.

::: code-group

```js [script.js]
window.alert('Hello from script.js!')
```

```html{5} [index.html]
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <script src="script.js" defer></script>
    <title>FrameRate</title>
  </head>
```

:::

::: tip

If we want the javascript to run **after** the page is loaded, we used to need
to place the `<script>` tag at the bottom of the HTML file.

However, using the `defer` attribute on the `<script>` tag will wait for the
page to load before running the javascript. This means we can put it in the
`<head>`, which looks neater.

:::
