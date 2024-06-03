# CSS and assets

<Vimeo id="936624461" />

## Including assets

With static file serving set up, you are able to access assets in the
`public folder` from within your views. Suppose you have an image stored at
`public/images/logo.png`. You can display it in your views like this:

```html{6} [index.ejs]
<%- include('partials/header') %>

<h1>Welcome to Bleeter</h1>
<h2>Follow the herd</h2>

<img src="/images/logo.png" alt="Bleeter logo" width="150">

<%- include('partials/footer') %>
```

## Applying CSS

To apply CSS to your files, create a `.css` file in your public folder. For
example, `public/css/index.css`. To apply it, simply include in your HTML
`<head>` as normal:

```html{4} [header.ejs]
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="/css/index.css">
  <title>Bleeter | <%= title %></title>
</head>
```
