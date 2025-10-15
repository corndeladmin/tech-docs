# CSS and assets

<Vimeo id="1015733171" />

::: tip

If your assets aren't loading, try adding leading slash, so `/logo.png` instead
of `logo.png`.

:::

## Including assets

With static file serving set up, it's very easy to include assets from the
public folder in our views.

For example,

```html
<img src="logo.png" alt="The Bleeter Logo" />
```

will look for `logo.png` inside the `public` folder.

## Applying CSS

To apply CSS to your files, create a `.css` file in your public folder. For
example, `public/css/style.css`. To apply it, include in your HTML `<head>` as
normal:

```html{4}
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <title>Bleeter</title>
</head>
```
