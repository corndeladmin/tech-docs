# Template partials

## The problem

Many pages in a website might share the same content. For example, our views
might look like this (the repeated content has been highlighted):

::: code-group

```html{1-9,12-13} [index.jte]
@import bleeter.models.Page
@param Page page

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bleeter | ${page.title}</title>
  </head>

  <body>
    <h1>Welcome to Bleeter</h1>
    <h2>Follow the herd</h2>
  </body>
</html>
```

```html{1-9,20-21} [bleets.jte]
@import java.util.List
@import bleeter.models.Page
@import bleeter.models.Bleet
@param Page page
@param List<Bleet> bleets

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bleeter | ${page.title}</title>
  </head>

  <body>
    <h1>Bleets</h1>
    <ol>
      @for(var bleet : bleets)
      <!-- use bleet -->
      <li>
        ${bleet.content.substring(0, 10)}...
        <a href="/bleets/${bleet.id}">Read more</a>
      </li>
      @endfor
    </ol>
  </body>
</html>
```

```html{1-9,13-14} [bleet.jte]
@import bleeter.models.Page
@import bleeter.models.Bleet
@param Page page
@param Bleet bleet

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bleeter | ${page.title}</title>
  </head>

  <body>
    <h1>A bleet</h1>
    <p>${bleet.content}</p>
    <p>${bleet.createdAt}</p>
  </body>
</html>
```

:::

This is a problem, because if we need to make a change to the shared parts of
each view, we need to update each view individually, which is extra work and an
opportunity for mistakes.

## Template calls

We can create partial templates and use them in our views.

The directory structure might look like this:

```txt
templates/
├── bleet.ejs
├── bleets.ejs
├── index.ejs
└── partials
    ├── footer.ejs
    └── header.ejs
```

We will put the repeated HTML into the partial templates.

::: code-group

```html [header.ejs]
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Bleeter | <%= title %></title>
  </head>

  <body>
```

```html [footer.ejs]
  </body>
</html>
```

:::

## Using partials

To use the partial templates in our views, we use the EJS `include` function.

::: code-group

```html [index.ejs]
<%- include('partials/header') %>

<h1>Welcome to Bleeter</h1>
<h2>Follow the herd</h2>

<%- include('partials/footer') %>
```

```html [bleets.ejs]
<%- include('partials/header') %>

<h1>Bleets</h1>
<ol>
  <% for (let bleet of bleets) { %>
  <!-- use bleet -->
  <li>
    <%= bleet.content.slice(0, 10) + '...' %>
    <a href="<%= `/bleets/${bleet.id}` %>">Read more</a>
  </li>
  <% } %>
</ol>

<%- include('partials/footer') %>
```

```html [bleet.ejs]
<%- include('partials/header') %>

<h1>A bleet</h1>
<p><%= bleet.content %></p>
<p><%= bleet.createdAt %></p>

<%- include('partials/footer') %>
```

:::

::: danger

When rendering untrusted content such as user input (including input stored in the database), always use `<%= %>` and not `<%- %>`. The ensures that the HTML content is escaped and prevents [XSS attacks](https://learn.snyk.io/lesson/xss/).

:::

::: info

Partials have access to the data of their parent! So, for example, the `title` which is passed to the `index.ejs` template is available in the `header.ejs` partial.

:::