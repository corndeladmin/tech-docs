# Using loops

<Vimeo id="1015232378" />

## Inserting data

Use `th:text` to insert and escape text data.

```html
<!-- Escaped text -->
<p th:text="${x + y}"></p>
```

Use `th:utext` for unescaped text (e.g., when you want to render HTML from the
data)

```html
<!-- Unescaped HTML content -->
<p th:utext="${htmlContent}"></p>
```

::: danger

You should always escape content unless you are certain its safe. Anything from
userland should always be escaped. Failing to do so can expose your site to
hackers.

:::

## Iteration

Loop through collections to dynamically generate elements.

```html
<ul>
  <li th:each="bleet : ${bleets}" th:text="${bleet.content}"></li>
</ul>
```

## Attribute replacement

<Vimeo id="1015232333" />

Replace attributes like `href`, `src`, etc. This allows us to insert parameters.

```html
<a th:href="@{/bleets/{id}(id=${bleetId})}">View bleet</a>
```

## Conditional rendering

<Vimeo id="1015258140" />

Use `th:if` to conditionally include elements

```html
<p th:if="${user.loggedIn}">Welcome, user!</p>
<p th:if="${!user.loggedIn}">Please log in.</p>
```
